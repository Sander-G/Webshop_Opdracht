import styled from "styled-components";
import Badge from "@material-ui/core/Badge";

import { Link } from "react-router-dom";
import { useCartQuantity } from "../../utils/useCartQuantity";
import { useDispatch } from "react-redux";
import { toggleModal } from '../../features/displaySlice';
import {logOut }  from '../../utils/firebase'

 
import CartSrc from "./../../images/skateCart.png";
import HeartSrc from "./../../images/skateHeart.png";
import BannerSrc from "./../../images/Banner.png";
import LogoSrc from "./../../images/skippy.png";
import LoginSrc from "./../../images/loginIcon.png";
import { useState } from "react";


export function Navbar() {
    const dispatch = useDispatch();
    const { total } = useCartQuantity();

    // const [showSignedIn, setShowSignedIn] = useState(false);


 

  return (
    <Container>
      <Link to="/"><Logo /></Link>
      <Link to="/"><Banner /></Link>

      <NavItems>
        <Badge color="secondary" overlap="circular" badgeContent={0} >
          <Link to="/Favourites">
            <Favourites />
          </Link>
        </Badge>
        <Badge color="secondary" overlap="circular" badgeContent={total} >
          <Link to="/ShoppingCart">
            <Cart />
          </Link>
        </Badge>
        <LogInWrapper>
          <LogIn onClick={() => dispatch(toggleModal())}/>
          {/* <LogInStatus onClick={logOut}>Log&nbsp;out</LogInStatus> */}
          </LogInWrapper>
        
      
      </NavItems>
    </Container>
  )
};

// styled components //
const Container = styled.div`
background-color: white;
display: flex;
flex-direction: row; 
justify-content: space-between;
align-items: center;
height: 5rem;
padding: 1em;
position: fixed;
top: 0;
width: 100vw;

@media (max-width: 500px) {
  height: 3rem;
  }
`;

const NavItems = styled.div`
display: flex;
flex-direction: row;
padding: 3em;
margin-right: 2rem;

@media (max-width: 768px) {
    padding: 2em;
  }
  @media (max-width: 500px) {
    padding: 1em;
    margin-right: 2rem;
  }
`;

const Favourites = styled.img.attrs({
  src: `${HeartSrc}`
})`
  width: 40px;
  height: 40px;
  padding: .1rem;
  @media (max-width: 500px) {
    width: 30px;
  height: 30px;
  }
`;

const Cart = styled.img.attrs({
  src: `${CartSrc}`
})`
  width: 40px;
  height: 40px;
  padding: .2rem;
  margin-left: .8em;
  @media (max-width: 500px) {
    margin-left: .1em;
    width: 30px;
  height: 30px;
  }
`;

const Banner = styled.img.attrs({
  src: `${BannerSrc}`
})`
  max-height: 5rem;
  margin-top: -.5rem;

  @media (max-width: 768px) {
    max-height: 4rem;
  }
  @media (max-width: 500px) {
    max-height: 3rem;
  }
`;

const Logo = styled.img.attrs({
  src: `${LogoSrc}`
})`
  max-height: 6rem;
  margin-left: 2rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    max-height: 4rem;
  }
  @media (max-width: 500px) {
    max-height: 3rem;
    margin-left: 0.5rem;
  margin-right: 0.1rem;
  }
`;

const LogIn = styled.img.attrs({
  src: `${LoginSrc}`
})`
  width: 30px;
  height: 30px;
  padding: .2rem;
  margin-left: .8em;
  margin-top: 8px;
  
  @media (max-width: 500px) {
    padding: 0;
  margin-left: 0;
  margin-top: 2px;
  }



  
  
`;

const LogInWrapper = styled.div`
display: flex;
flex-direction: column;
margin-right: 1rem;
@media (max-width: 500px) {
    margin-left: .1em;
    width: 30px;
  height: 30px;
  padding: .2rem;
  margin-right: -0.7rem;
 
  }

`

const LogInStatus = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-left: .8em;

@media (max-width: 500px) {
    margin-left: .1em;
  }
cursor: pointer;
`