
import GlobalStyle from "../../styles/GlobalStyle"
import styled from "styled-components"
import colors from "../../styles/GlobalStyle"
import vintageSrc from "../../images/vintageCat.jpg"
import reissueSrc from "../../images/reissueCat.jpg"
import partsSrc from "../../images/partsCat.jpg"
import { Link } from "react-router-dom";


export function ProdCats() {

  return (
    <>
      <GlobalStyle />
      <Container>

        <ProdCatWrapper>
          <Vintage>
          <Link to="/Vintage"><HeaderText>Vintage</HeaderText></Link>
          </Vintage>
          <Reissue>
          <Link to="/Reissue"><HeaderText>New&nbsp;/&nbsp;Reissue</HeaderText></Link>
          </Reissue>
          <Parts>
          <Link to="/Parts"><HeaderText>Parts</HeaderText></Link>
          </Parts>
        </ProdCatWrapper>
      </Container>
    </>
  )
};


// Styled components
const Container = styled.div`
  bottom: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
 `
const ProdCatWrapper = styled.div`
 display:flex;
 flex-direction: row;
 width: 90vw;
 justify-content: space-between;
 @media (max-width: 500px) {
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
   
  }



 `
const Vintage = styled.div`
  width: 28.5vw;
  height: 28.5vh;
  background-image: url(${vintageSrc});
  background-size: cover;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    background-position: -2.4cm;
  }
  @media (max-width: 500px) {
    background-position: center;
    height: 20vh;
    width: 90vw;
  }


`

const Reissue = styled.div`
  width: 28.5vw;
  height: 28.5vh;
  background-image: url(${reissueSrc});
  background-size: cover;
  background-position: center;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    background-position: center;
    height: 20vh;
    width: 90vw;
    margin-top: 1rem;
   
  }

`
const Parts = styled.div`
  width: 28.5vw;
  height:28.5vh;
  background-image: url(${partsSrc});
  background-size: cover;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    background-position: center;
    background-repeat: no-repeat;
    height: 20vh;
    width: 90vw;
    margin-top: 1rem;
   
  }
  
 
`
const HeaderText = styled.h3`

&:hover  {
    transition: scale 0.2s ease-in-out;
        scale: 1.1;
   
    
  }

 `