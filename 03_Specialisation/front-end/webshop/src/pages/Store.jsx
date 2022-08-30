
import GlobalStyle from "../elements/GlobalStyle"
import styled from "styled-components"
import colors from "../elements/GlobalStyle"
import vintageSrc from "../images/vintageCat.jpg"
import reissueSrc from "../images/reissueCat.jpg"
import partsSrc from "../images/partsCat.jpg"


export function Store() {

    return (
        <>
            <GlobalStyle />
            <Container>
                <h1>Store</h1>
                <ProdCatWrapper>
                    <Vintage>
                        <h3>Vintage</h3>
                    </Vintage>
                    <Reissue>
                        <h3>New / Reissue</h3>
                    </Reissue>
                    <Parts><h3>Parts</h3></Parts>
                </ProdCatWrapper>
            </Container>
        </>
    )
};

const Container = styled.div`
  bottom: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
 `
const ProdCatWrapper = styled.div`
 display:flex;
 flex-direction: row;
 width: 90vw;
 justify-content: space-between;
 `
const Vintage = styled.div`
  width: 28.5vw;
  height: 28.5vh;
  background-image: url(${vintageSrc});
  background-size: cover;
  opacity: 70%;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Reissue = styled.div`
  width: 28.5vw;
  height: 28.5vh;
  background-image: url(${reissueSrc});
  background-size: cover;
  opacity: 70%;
  background-position: center;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

`
const Parts = styled.div`
  width: 28.5vw;
  height:28.5vh;

  /* background-color: ${colors.tertiary}; */
  background-image: url(${partsSrc});
  background-size: cover;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  opacity: 70%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
 
`
