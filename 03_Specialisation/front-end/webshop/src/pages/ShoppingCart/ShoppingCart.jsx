import styled from "styled-components"

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
    return (
        <Container>
        <Wrapper>
        <h1>ShoppingCart</h1>
        </Wrapper>
        { cart.cartItems.length === 0 ? (
          <div className="emptyCart">
            <p> Your Cart is empty</p>
            <div className="startShopping">
            <Link to="/"><p>Start Shopping</p></Link>
            </div>
          </div>
        ) : (<>
            <div className="titles">
            <h3 className="productName">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
            </div>
            <div className="cartItems">
              {cart.cartItems?.map(cartItem =>
              (
               <div className="cartItem" key= {cartItem.id}>
               <div className="cartProduct">
                  <img src={cartItem.image} alt={cartItem.name} />

               </div> 
               </div>
              ))}
            </div>
            .cart-items



        </>)}


        </Container>
    );
};
export default ShoppingCart;


const Container = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  color: black;
 `;


const Wrapper = styled.div`
  width: 90vw;
  height: 25vh;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  line-height: .2rem;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
 `;

