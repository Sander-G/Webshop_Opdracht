
import GlobalStyle from "../../styles/GlobalStyle"
import styled from "styled-components"
import { NewArrivalBanner } from "../../components/NewArrival/NewArrivalBanner"
import { ProdCats } from "../../components/ProdCats/ProdCats"
import { NewsLetter } from "../../components/NewsLetter/NewsLetter"

import { useGetAllProductsQuery } from "../../features/productsAPI"





const Home = () => {

   const {data, error, isLoading} = useGetAllProductsQuery()
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
 `
