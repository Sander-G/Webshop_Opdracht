import styled from "styled-components"
import { colors } from '../../elements/GlobalStyle'
import CartSrc from "./../../images/skateCart.png"
import HeartSrc from "./../../images/skateHeart.png"
import Badge from "@material-ui/core/Badge";
import  BannerSrc  from "./../../images/Banner.png"
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
<Link to="/"><h1>Logo</h1></Link>

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
width: 100%;
box-shadow: 0 0 15px smokewhite;
`

const NavItems = styled.div`
display: flex;
flex-direction: row;
padding: 3em;
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
  max-width: 40vw;
  max-height: 6rem;
margin-top: -.5rem;
margin-left: 4rem;
  padding: .2rem;

  `;