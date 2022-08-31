
import GlobalStyle from "../elements/GlobalStyle"
import styled from "styled-components"
import { Store } from "./Store"
import { NewArrival } from "../components/NewArrival/NewArrival"
import { NewsLetter } from "../components/NewsLetter/NewsLetter"




export function Home() {

    return (
        <>
        <GlobalStyle />
        <Container>

    <NewArrival />
    
    <Store />
  
    <NewsLetter />
    </Container>
    </>
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
