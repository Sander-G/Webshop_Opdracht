import styled from "styled-components"
import CartSrc from "./../images/skateCart.svg"
import Badge from "@material-ui/core/Badge";

export function Navbar () {
    return (
<Container>
<div className="Logo">
<h3>Logo Hier</h3>
</div>
<NavItems>
<h4>Zoeken</h4>
<h4>Favourites</h4>
<Badge color="secondary" overlap="circle" badgeContent={3} >
<SkateCart />
</Badge>
</NavItems>
</Container>

    )
};



// styled components //
const Container = styled.div`
background-color: green;
display: flex;
flex-direction: row; 
justify-content: space-between;
align-items: center;
align-content: center;
height: 60px;
padding: 0.2em;
`

const NavItems = styled.div`
display: flex;
flex-direction: row;
`


const SkateCart = styled.img.attrs({
    src: `${CartSrc}`
  })`
  width: 50px;
  height: 50px;
  padding: .2rem;
  `;