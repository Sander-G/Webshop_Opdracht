import styled from "styled-components";
import { colors } from '../../styles/GlobalStyle';
import backgroundSrc from "./../../images/newsletterBanner.jpg";
import { toast } from "react-toastify";

export function NewsLetter() {
 


    return (
        <Container>
            <h1>NewsLetter</h1>
            <SubHeaderText>Sign up for our newsletter here:</SubHeaderText>
            <form>
                <input type="email" placeholder="E-mail goes here.." required />

                <button onSubmit={() =>
                    toast.info("You have signed up for our newsletter!")}>
                    Sign up!</button>
            </form>
        </Container>
    )
};


const Container = styled.div`
  width: 90vw;
  height: 25vh;
  margin-top: 1rem;
  margin-bottom: 2rem;
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

  @media (max-width: 768px) {
    background-position: -3cm;
  }
  @media (max-width: 500px) {
    background-position: -3.4cm;
    height: 20vh;
    margin-bottom: 3rem;
   
  }
 `;

const SubHeaderText = styled.p`
  text-shadow: 1px 1px #2b2b28;
 `;