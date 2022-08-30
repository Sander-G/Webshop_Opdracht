import styled from "styled-components"
import { colors } from '../../elements/GlobalStyle'
import backgroundSrc from "./../../images/newArrivalsBanner.jpg"

export function NewArrival() {
    return (
        <Container>
            <h1>New Arrivals</h1>
        </Container>
        )
};

const Container = styled.div`
  width: 90vw;
  height: 30vh;
  /* background-color: ${colors.tertiary}; */
  background-image: url(${backgroundSrc});
  background-size: cover;
  color: ${colors.secondary};
  font-size: 1.2rem;
  border-radius: 5px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
 ` 