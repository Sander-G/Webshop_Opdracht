import styled from "styled-components"
import { getTotals } from "../../features/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearCart, removeFromCart } from "../../features/cartSlice";
import { removeFromFavourites } from "../../features/favouritesSlice";


const FavouriteList = () => {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [favourites]);

  const handleRemoveFromFavourites = (favouriteItem) => {
    dispatch(removeFromFavourites(favouriteItem))

  }
  const handleIncreaseCartQty = (cartItem) => {
    dispatch(addToCart(cartItem))
  }
  const handleClearCart = () => {
    dispatch(clearCart());
  }


  return (
    <>
      <Container>
        <Header>Favourites</Header>


        {favourites.favouriteItems.length === 0 ? (
          <EmptyFavourites>
            <p> Your List is empty</p>
            <StartShopping>
              <Link to="/"><h4>Start Shopping</h4></Link>
            </StartShopping>
          </EmptyFavourites>

        ) : (
          <>
         

            <div className="cartItems">
              {favourites.favouriteItems?.map(favouriteItem =>
              (
                <CartItem key={favouriteItem.id}>
                  <CartProduct>
                    <CartImage src={favouriteItem.image} alt={favouriteItem.name} />
                    <div>
                      <ItemTitle>{favouriteItem.title}</ItemTitle>
                      <p>{favouriteItem.desc}</p>
                      <div className="cart__product--Price">€ {favouriteItem.price}</div>
                      <RemoveButton onClick={() => handleRemoveFromFavourites(favouriteItem)}>Remove</RemoveButton>
                      <RemoveButton onClick={() => handleIncreaseCartQty(favouriteItem)}>Add to Cart</RemoveButton>
                    </div>
                  </CartProduct>

                </CartItem>

              ))}
            </div>

            <CartSummary>
              <ClearButton onClick={() => handleClearCart()}>Clear Cart</ClearButton>

          
              <StartShopping>
                  <Link to="/"><h4>Continue Shopping..</h4></Link>
                </StartShopping>
            </CartSummary>




          </>)}


      </Container>
    </>

  );
};
export default FavouriteList;


const Container = styled.div`
  width: 90vw;
  margin-left: 5vw;
  padding-top: 6rem;

  display: grid;
  align-items: center;
  justify-content: center;
  color: black;
 `;

const Header = styled.h2`
font-weight: 400;
font-size: 30px;
text-align: center;
color: black; 
`;

const Titles = styled.div`
  margin: 1rem 0 1rem 0;
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
  text-transform: uppercase;
  
  & h3 {   font-size: 14px;
    color: black;
  font-weight: 400;
}
 `;

const CartItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
  border-top: 1px solid rgb(178, 178, 178);
  padding: 0.5rem 0;
 `

const ProductName = styled.h3`
  padding-left: 0.5rem;
 `;

const Total = styled.h3`
padding-right: 0.5rem;
justify-self: right ;

`;

const CartProduct = styled.div`
  display: flex;
`;

const CartImage = styled.img`
  width: 150px;
  max-width: 100%;
  max-height: 100%;
  margin-right: 1rem;
`;

const ItemTitle = styled.h3`
  font-weight: 400;
  
`;

const RemoveButton = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  /* outline: none; */
  margin-top: 0.7rem;
  cursor: pointer;
  background: none;
  color: black;
  letter-spacing: 1.15px;
  &:hover {
    background-color: lightblue;
  }
`;



const QuantityButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
`;



const CartProductTotalPrice = styled.div`
  justify-self: right;
  padding-right: 0.5rem;
  font-weight: 800;
`;

const CartSummary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid rgb(178,178,178);
  padding-top: 2rem;
`;

const ClearButton = styled.button`
  
  border: 1px solid grey;
  border-radius: 5px;
  /* outline: none; */
  margin-top: 0.7rem;
  cursor: pointer;
  background: none;
  color: black;
  letter-spacing: 1.15px;
  &:hover {
    background-color: lightblue;
  }
`;

const StartShopping = styled.div`
  font-size: 14px;
  
  font-weight: 600;
  & h4 {
    color: #d7732b;
    text-shadow: none;
  };
`;

const EmptyFavourites = styled.div`
margin-top: 4rem;
font-size: 20px;
color: rgb(84,84,84);
display: flex;
flex-direction: column;
align-items: center;
  
`;










