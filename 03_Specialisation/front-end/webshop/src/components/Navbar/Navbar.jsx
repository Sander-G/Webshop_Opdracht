import styled from "styled-components";
import CartSrc from "./../../images/skateCart.png";
import HeartSrc from "./../../images/skateHeart.png";
import Badge from "@material-ui/core/Badge";
import BannerSrc from "./../../images/Banner.png";
import LogoSrc from "./../../images/logo.png";
import LoginSrc from "./../../images/loginIcon.png";
import { Link } from "react-router-dom";


export function Navbar() {
  return (
    <Container>

      <Link to="/"><Logo/></Link>
      <Link to="/"><Banner/></Link>
      <NavItems>
          <Badge color="secondary" overlap="circle" badgeContent={1} >
            <Link to="/Favourites">
              <Favourites />
            </Link>
          </Badge>
          <Badge color="secondary" overlap="circle" badgeContent={1} >
            <Link to="/ShoppingCart">
              <Cart />
            </Link>
          </Badge>
            <Link to="/Login">
            <Login />
            </Link>
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
`;

const NavItems = styled.div`
display: flex;
flex-direction: row;
padding: 3em;
margin-right: 2rem;
`;

const Favourites = styled.img.attrs({
  src: `${HeartSrc}`
})`
  width: 40px;
  height: 40px;
  padding: .1rem;
`;

const Cart = styled.img.attrs({
  src: `${CartSrc}`
})`
  width: 40px;
  height: 40px;
  padding: .2rem;
  margin-left: .8em;
  `;

const Banner = styled.img.attrs({
  src: `${BannerSrc}`
})`
  max-width: auto;
  max-height: 5rem;
margin-top: -.5rem;


  `;

const Logo = styled.img.attrs({
  src: `${LogoSrc}`
})`

  height: 8rem;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 1rem;
  
  `;

const Login = styled.img.attrs({
  src: `${LoginSrc}`
})`
  
  width: 30px;
  height: 30px;
  padding: .2rem;
  margin-left: .8em;
  margin-top: 6px;

  
  `;