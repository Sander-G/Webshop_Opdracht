import styled from "styled-components"

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
    return (
       <>    
       <Container>
       <Header>ShoppingCart</Header>
       
       
        { cart.cartItems.length === 0 ? (
          <div className="emptyCart">
            <p> Your Cart is empty</p>
            <div className="startShopping">
            <Link to="/"><p>Start Shopping</p></Link>
            </div>
          </div>
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
              <span className="amount">€ {cart.cartTotalAmount}</span>
              </SubTotal>
             
            
            
            <p>Includes VAT, free shipping above </p>
            <CheckOutButton>Check out</CheckOutButton>
            
            
            <div className="startShopping">
            <Link to="/"><p>Continue Shopping</p></Link>
            </div>
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
`;

 const Titles = styled.div`
  margin: 2rem 0 1rem 0;
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
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
  &:hover {
    background-color: lightblue;
  }
`;

const ProductQuantity = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 130px;
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



const CheckOutButton = styled.button`
  
  border: 1px solid grey;
  border-radius: 5px;
  /* outline: none; */
  margin-top: 0.7rem;
  cursor: pointer;
  background: none;
  color: black;
  &:hover {
    background-color: lightblue;
  }
`;









