import styled from "styled-components"
import backgroundSrc from "./../../images/newArrivalsBanner.jpg"
import { Link } from "react-router-dom";

export function NewArrival() {
    return (
        <Container>
            <Link to="/NewArrivals"><HeaderText>New Arrivals</HeaderText></Link>
            <p>Freshly rolled into our store.</p>
        </Container>
        )
};

const Container = styled.div`
  width: 90vw;
  height: 25vh;
  background-image: url(${backgroundSrc});
  background-size: cover;
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

 const HeaderText = styled.h1`

&:hover  {
    transition: scale 0.2s ease-in-out;
        scale: 1.05;
  
  }



 `;