import styled from "styled-components"
import { getTotals } from "../../features/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import { clearFavourites, removeFromFavourites } from "../../features/favouritesSlice";


const FavouriteList = () => {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [favourites]);

  const handleRemoveFromFavourites = (favouriteItem) => {
    dispatch(removeFromFavourites(favouriteItem))

  }
  const handleIncreaseCartQty = (favouriteItem) => {
    dispatch(addToCart(favouriteItem))
  }
  const handleClearFavourites = () => {
    dispatch(clearFavourites());
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
         

            <div className="FavouriteItems">
              {favourites.favouriteItems?.map(favouriteItem =>
              (
                <FavouriteItem key={favouriteItem.id}>
                  <FavouriteProduct>
                    <FavouriteImage src={favouriteItem.image} alt={favouriteItem.name} />
                    <div>
                      <ItemTitle>{favouriteItem.title}</ItemTitle>
                      <p>{favouriteItem.desc}</p>
                      <div className="Price">€ {favouriteItem.price}</div>
                      <Button onClick={() => handleRemoveFromFavourites(favouriteItem)}>Remove</Button>
                      <Button onClick={() => handleIncreaseCartQty(favouriteItem)}>Add to Cart</Button>
                    </div>
                  </FavouriteProduct>

                </FavouriteItem>

              ))}
            </div>

            <BottomDiv>
              <ClearButton onClick={() => handleClearFavourites()}>Clear Favourites</ClearButton>

          
              <StartShopping>
                  <Link to="/"><h4>Continue Shopping..</h4></Link>
                </StartShopping>
            </BottomDiv>




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


const FavouriteItem = styled.div`
  width: 90vw;
  display: grid;
    align-items: center;
    justify-content: center;
  grid-template-columns: fr 2fr 2fr;
  column-gap: 0.5rem;
  border-top: 1px solid rgb(178, 178, 178);
  padding: 0.5rem 0;
 `

const FavouriteProduct = styled.div`
  display: flex;
`;

const FavouriteImage = styled.img`
  width: 150px;
  max-width: 100%;
  max-height: 100vh;
  margin-right: 1rem;
`;

const ItemTitle = styled.h3`
  font-weight: 400;
  
`;
const Button = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  /* outline: none; */
  margin-top: 0.7rem;
  margin-right: 0.7rem;
  cursor: pointer;
  background: none;
  color: black;
  letter-spacing: 1.15px;
  &:hover {
    background-color: lightblue;
  }
`;









const BottomDiv = styled.div`
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
  margin-bottom: 4rem;
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










