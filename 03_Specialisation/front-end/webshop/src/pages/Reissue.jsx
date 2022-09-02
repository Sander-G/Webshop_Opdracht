import styled from "styled-components"
import backgroundSrc from "../images/reissueCatWide.jpg"
export function Reissue() {
    return (
        <Container>
        <Wrapper>
          <h1> Reissued Skateboards </h1>
          <p>Fresh classic skateboard designs </p>
        </Wrapper>
        </Container>
        )
};


const Container = styled.div`
  width: 100%;
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  
 ` 


const Wrapper = styled.div`
  width: 90vw;
  height: 25vh;
  background-image: url(${backgroundSrc});
  background-size: cover;
  background-position: center;
  
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
