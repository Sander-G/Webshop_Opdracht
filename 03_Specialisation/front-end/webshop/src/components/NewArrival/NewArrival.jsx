import styled from "styled-components"
import { colors } from '../../elements/GlobalStyle'
import backgroundSrc from "./../../images/newArrivalsBanner.jpg"

export function NewArrival() {
    return (
        <Container>
            <h1>New Arrivals</h1>
            <p>Freshly rolled into our store.</p>
        </Container>
        )
};

const Container = styled.div`
  width: 90vw;
  height: 20vh;
  /* background-color: ${colors.tertiary}; */
  background-image: url(${backgroundSrc});
  background-size: cover;
  color: ${colors.secondary};
  font-size: 1.2rem;
  border-radius: 5px;
  line-height: .2rem;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 ` 