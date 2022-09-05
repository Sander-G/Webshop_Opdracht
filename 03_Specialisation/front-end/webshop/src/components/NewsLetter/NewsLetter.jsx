import styled from "styled-components"
import { colors } from '../../styles/GlobalStyle'
import backgroundSrc from "./../../images/newsletterBanner.jpg"

export function NewsLetter() {
    return (
        <Container>
            <h1>NewsLetter</h1>
            <p>Sign up for our newsletter here:</p> 
            <form>
            <input type="email" placeholder="E-mail goes here.." /> <button>Sign up!</button>
            </form>
      
        </Container>
        )
};

const Container = styled.div`
  width: 90vw;
  height: 25vh;
  margin-top: 1rem;
  margin-bottom: 2rem;
  /* background-color: ${colors.tertiary}; */
  background-image: url(${backgroundSrc});
  background-size: cover;
  color: ${colors.secondary};
  font-size: 1.2rem;
  line-height: .2rem;
  border-radius: 5px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 ` 