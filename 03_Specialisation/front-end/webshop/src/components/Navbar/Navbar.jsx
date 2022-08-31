import styled from "styled-components"
import { colors } from '../../elements/GlobalStyle'
import CartSrc from "./../../images/skateCart.png"
import HeartSrc from "./../../images/skateHeart.png"
import Badge from "@material-ui/core/Badge";
import  BannerSrc  from "./../../images/Banner.png"
import LogoSrc from "./../../images/logo.png"
import { shadows } from '@mui/system';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export function Navbar () {
    return (
<Container>
<div className="Logo">
<Link to="/"><Logo/></Link>

</div>


<Banner></Banner>
<NavItems>
<Badge color="secondary" overlap="circle" badgeContent={8} >
<Favourites />
</Badge>
<Badge color="secondary" overlap="circle" badgeContent={3} >
<Cart />
</Badge>
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
`

const NavItems = styled.div`
display: flex;
flex-direction: row;
padding: 3em;
margin-right: 2rem;
`

const Favourites = styled.img.attrs({
    src: `${HeartSrc}`
})`
  width: 50px;
  height: 50px;
  padding: .2rem;
`

const Cart = styled.img.attrs({
    src: `${CartSrc}`
  })`
  width: 50px;
  height: 50px;
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
  margin-left: 1rem;
  margin-right: 1rem;
  
  `