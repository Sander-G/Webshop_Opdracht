
import GlobalStyle from "../../styles/GlobalStyle"
import styled from "styled-components"
import { NewArrivalBanner } from "../../components/NewArrival/NewArrivalBanner"
import { ProdCats } from "../../components/ProdCats/ProdCats"
import { NewsLetter } from "../../components/NewsLetter/NewsLetter"







const Home = () => {


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

export default Home;

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

  @media (max-width: 500px) {
    padding-top: 4.8rem;
  }
 `
