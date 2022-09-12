import styled from "styled-components"
import backgroundSrc from "./../../images/newArrivalsBanner.jpg"
// import Product from "../../components/Products/Product";

//Router
import { useNavigate } from "react-router-dom"
// Redux
import { useDispatch } from "react-redux"
import { useGetAllProductsQuery } from "../../features/productsAPI"
import { addToCart } from "../../features/cartSlice";



export function NewArrivals() {
  const {data, error, isLoading} = useGetAllProductsQuery();
  const dispatch = useDispatch();  
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/ShoppingCart");
  };

  return (
        <Container>
        <Banner>
        <h1>New Arrivals</h1>
        </Banner>
        <ProdContainer>
        { isLoading ? ( <p>Loading...</p> ) :
         error ? ( <p>An error occured..</p> ) :
          ( <>
            {data?.map( (product) => 
            <Product key={product.id} >
            <Title> {product.title} </Title>
            <ProdImg src={product.image} alt={product.name}/>
              <Details>
                <span>{product.desc}</span>
                <Price>€{product.price}</Price>
              </Details>
                <Button onClick= {() => handleAddToCart(product)}>Add to Cart</Button>
            </Product>)}
        </>
        )}


        </ProdContainer>
     
        </Container>
        )
};


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
padding: 1rem;
border-radius: 5px;
box-shadow: -5px -5px 10px rgba(255,255,255, 0.5), 
5px 5px 5px rgba(255,255,255, 0.5), 
2px 2px 5px rgba(94, 104, 121, 0.3),
-2px -2px 5px rgba(94, 104, 121, 0.3);
`;

 const Title = styled.h3`
 font-size: 2em;
 font-weight: 400;
 text-align: center;
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
margin-top: 20px;
margin-bottom: 20px;
font-weight:400px;
border: none;
outline: none;
cursor: pointer;
background: #4b70e2;
color: white;
letter-spacing: 1.25px;
`;
