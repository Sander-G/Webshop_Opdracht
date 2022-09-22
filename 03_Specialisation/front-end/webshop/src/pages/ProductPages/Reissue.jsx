import styled from "styled-components"
import backgroundSrc from "../../images/reissueCatWide.jpg"
import heart from "../../images/heart.svg"

import { useNavigate, Link } from "react-router-dom"

import { useDispatch } from "react-redux"
import { useGetAllProductsQuery } from "../../features/productsAPI"
import { addToCart } from "../../features/cartSlice";
import { addToFavourites } from "../../features/favouritesSlice"


export function Reissue() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/ShoppingCart");
  };
  const handleAddToFavourites = (product) => {
    dispatch(addToFavourites(product));
  };

  return (
    <Container>
      <Banner>
        <h1> Reissued Skateboards </h1>
        <SubHeaderText>Fresh classic skateboard designs </SubHeaderText>
      </Banner>
      <ProdContainer>
        {isLoading ? (<p>Loading...</p>) :
          error ? (<p>An error occured..</p>) :
            (<>
              {data?.map((product) =>
                product.category === "Reissue" ?
                  <Product key={product.id} >
                    <AddToFavourites alt="add to Favourites" onClick={() => handleAddToFavourites(product)} />
                    <ProdImg src={product.image} alt={product.name} />
                    <Title> {product.title} </Title>
                    <Details>
                      <span>{product.desc}</span>
                      <Price>€{product.price}</Price>
                    </Details>
                    <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                  </Product>
                  : <></>)
              }
            </>
            )
        }
      </ProdContainer>
      <StartShopping>
        <Link to="/"><h4>Back to main..</h4></Link>
      </StartShopping>
    </Container>
  );
};

//Styled Components
const Container = styled.div`
  width: 100%;
  padding-top: 7rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  
 `;

const Banner = styled.div`
  width: 90vw;
  height: 25vh;
  background-image: url(${backgroundSrc});
  background-size: cover;
  background-position: center;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  line-height: .2rem;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
 `;

const SubHeaderText = styled.p`
text-shadow: 1px 1px #2b2b28;
`;

const ProdContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap; 
width: 90vw;
padding: 1rem 1rem;
 `;

const Product = styled.div`
width: 250px;
max-width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 1rem auto;
padding: 0.5rem;
border-radius: 5px;
box-shadow: -5px -5px 10px rgba(255,255,255, 0.5), 
5px 5px 5px rgba(255,255,255, 0.5), 
2px 2px 5px rgba(94, 104, 121, 0.3),
-2px -2px 5px rgba(94, 104, 121, 0.3);
`;

const Title = styled.h3`
 font-size: 2em;
 font-weight: 400;
 text-align: left;
 color: black;
 margin-top: 0.5em;
 margin-bottom: 0.1em;
 `;

const ProdImg = styled.img`
 width: 80%;
 margin-left: auto;
 margin-right: auto;
 `;

const Details = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-right: 0.5em;
 `;

const Price = styled.span`
font-size: 20px;
font-weight: 700;
`;

const Button = styled.button`
width: 50%;
height: 30px;
align-self: center;
border-radius: 5px;
margin-top: 1em;
margin-bottom: 0.5em;
font-weight:400px;
border: none;
outline: none;
cursor: pointer;
background: #4b70e2;
color: white;
letter-spacing: 1.25px;
`;

const AddToFavourites = styled.img.attrs({
  src: `${heart}`
})`
height: 2em;
align-self: flex-end;
cursor: pointer;
&:hover {
  transform: scale(1.1);
}
`;

const StartShopping = styled.div`
  font-size: 14px;
  
  font-weight: 600;
  & h4 {
    color: #d7732b;
    text-shadow: none;
  };
`;



