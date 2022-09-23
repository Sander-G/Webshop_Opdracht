import styled from "styled-components"
import backgroundSrc from "./../../images/newArrivalsBanner.jpg"
import { Link } from "react-router-dom";

export function NewArrivalBanner() {
    return (
        
        <Container>
            <Link to="/NewArrivals"><HeaderText>New Arrivals</HeaderText></Link>
            {/* <SubHeaderText>Freshly rolled into our store.</SubHeaderText> */}
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
  @media (max-width: 768px) {
    background-position: -2.4cm;
  }
  @media (max-width: 500px) {
    background-position: -3.4cm;
    height: 20vh;
   
  }
 `;

 const HeaderText = styled.h1`

&:hover  {
    transition: scale 0.2s ease-in-out;
        scale: 1.05;
  
  }
`;
  const SubHeaderText = styled.p`
   text-shadow: 1px 1px #2b2b28;
  `;


 