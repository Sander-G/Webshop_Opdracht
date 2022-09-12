import styled from "styled-components"

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
    return (
       <>    
       <Container>
       <Header>Shopping Cart</Header>
       
       
        { cart.cartItems.length === 0 ? (
          <EmptyCart>
            <p> Your Cart is empty</p>
            <StartShopping>
            <Link to="/"><h4>Start Shopping</h4></Link>
            </StartShopping>
            </EmptyCart>
         
        ) : (
          <>
            <Titles>
            <ProductName>Product</ProductName>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <Total>Total</Total>
            </Titles>

              <div className="cartItems">
                {cart.cartItems?.map(cartItem =>
                (
              <CartItem key= {cartItem.id}>
                  <CartProduct>
                    <CartImage src={cartItem.image} alt={cartItem.name} />
                      <div>
                      <ItemTitle>{cartItem.title}</ItemTitle>
                      <p>{cartItem.desc}</p>
                      <RemoveButton>Remove</RemoveButton>
                      </div>
                  </CartProduct> 
                <div className="cart__product--Price">€ {cartItem.price}</div>
                  <ProductQuantity>
                    <QuantityButton>-</QuantityButton>
                    <ProductCount>{cartItem.cartQuantity}</ProductCount>
                    <QuantityButton>+</QuantityButton>
                  </ProductQuantity>
                <CartProductTotalPrice>
                € {cartItem.price * cartItem.cartQuantity}
                </CartProductTotalPrice>
               </CartItem>

              ))}
            </div>

            <CartSummary> 
              <ClearButton>Clear Cart</ClearButton>
              
              <CartCheckout>
              <SubTotal>
              <span>Subtotal:</span>
              <Amount>€ {cart.cartTotalAmount}</Amount>
              </SubTotal>
             
            
            
            <p>Includes VAT, free shipping for all!</p>
            <CheckOutButton>Check out</CheckOutButton>
            
            
            <StartShopping>
            <Link to="/"><h4>Continue Shopping..</h4></Link>
            </StartShopping>
            </CartCheckout>
            </CartSummary>
            



        </>)}


        </Container>
        </>

    );
};
export default ShoppingCart;


const Container = styled.div`
  width: 100vw;
  padding-top: 6rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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
 `

const Total = styled.h3`
padding-right: 0.5rem;
justify-self: right ;

`
const CartProduct = styled.div`
  display: flex;
`

const CartImage = styled.img`
  width: 150px;
  max-width: 100%;
  margin-right: 1rem;
`
const ItemTitle = styled.h3`
  font-weight: 400;
`
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

const ProductQuantity = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 120px;
  max-width: 100%;
  border: 0.5px solid rgb(178,178,178);
  border-radius: 5px;
`;

const QuantityButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
`;

const ProductCount = styled.div`
  padding: 0.7rem 0;
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

const CartCheckout = styled.div`
width: 270px;
max-width: 100%;
`;

const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

const Amount = styled.span`
  font-weight: 700;
`



const CheckOutButton = styled.button`
  width: 100%;
  height: 30px;
  margin-right:1rem;
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

const EmptyCart = styled.div`
margin-top: 4rem;
font-size: 20px;
color: rgb(84,84,84);
display: flex;
flex-direction: column;
align-items: center;
  
`;










