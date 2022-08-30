
import GlobalStyle from "../elements/GlobalStyle"
import styled from "styled-components"
import colors from "../elements/GlobalStyle"
import { Store } from "./Store"
import { NewArrival } from "../components/NewArrival/NewArrival"



export function Home() {

    return (
        <>
        <GlobalStyle />
        <Container>
    <h1>Home</h1>
    <NewArrival />
    <Store />
    </Container>
    </>
    )
};

const Container = styled.div`
  width: 100%;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 ` 
