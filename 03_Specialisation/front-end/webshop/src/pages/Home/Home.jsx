
import GlobalStyle from "../../styles/GlobalStyle"
import styled from "styled-components"
import { ProdCats } from "../../components/ProdCats/ProdCats"
import { NewArrivalBanner } from "../../components/NewArrival/NewArrivalBanner"
import { NewsLetter } from "../../components/NewsLetter/NewsLetter"




export function Home() {

    return (
        <>
            <GlobalStyle />
            <Container>
                <NewArrivalBanner />
                <ProdCats />
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
