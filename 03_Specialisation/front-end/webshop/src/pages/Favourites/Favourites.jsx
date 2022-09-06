import styled from "styled-components"

export function Favourites() {
    return (
        <Container>
        <Wrapper>
        <h1>Favourites</h1>
        </Wrapper>
        </Container>
        )
};


const Container = styled.div`
  width: 100%;
  padding-top: .5rem;
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

