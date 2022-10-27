import styled from "styled-components";
import backgroundSrc from "./../../images/newArrivalsBanner.jpg";
import heart from "../../images/heart.svg";
import { float } from "../../assets/animation"
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../../features/productsAPI";
import { addToCart } from "../../features/cartSlice";
import { addToFavourites } from "../../features/favouritesSlice";

export function NewArrivals() {

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
        <h1>New Arrivals</h1>
        <SubHeaderText>Freshly rolled into our store.</SubHeaderText>
      </Banner>

      <AnimContainer>
        {isLoading ? (<p>Loading...</p>) :
          error ? (<p>An error occured..</p>) :
            (<>
              {data?.map((product) =>
                product.category === "NewArrival" ?

                  <Wrapper key={product.id}>

                    <Card>
                      <Front className="front">

                        <H1>{product.title}</H1>
                        <P>{product.desc}</P>
                        <Price>€ {product.price}</Price>
                      </Front>

                      <Right className="right">
                        <AddToFavourites
                          alt="add to Favourites"
                          onClick={() => handleAddToFavourites(product)} />
                        <H2>{product.title}</H2>

                        <P>{product.desc}</P>

                        <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                      </Right>

                    </Card>


                    <ImgWrapper className="img-wrapper">
                      <BoardImg src={product.image} alt='' />


                    </ImgWrapper>
                  </Wrapper>
                  : <></>)
              }
            </>)
        }
      </AnimContainer>

      <StartShopping>
        <Link to="/"><h4>Back to main..</h4></Link>
      </StartShopping>
    </Container>
  );
};

// Styled Components
const AnimContainer = styled.div`
 display: flex;
  width: 90vw;
  height: 450px;
  margin-top: 2rem;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0;
  color: black;
  font-family: 'Helvetica';
  font-weight: 300;
`;

const Wrapper = styled.div`
  width: 280px;
  height: 550px;
  perspective: 600px;
  position: relative;
`;

const Card = styled.div`
  width: 320px;
  height: 550px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-140px);
  transition: transform 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  cursor: pointer;

  > div{
  position: absolute;
  width: 320px;
  height: 300px;
  padding: 5px 10px;
  transition: all 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000); 
  }

  &:hover{
  transform: translateZ(-160px) rotateY( -90deg);
  }

  &:hover .front{
  opacity: 0;
  color: white; 
  }
  
  &:hover .right{
  opacity: 1; 
  }

  &:hover ~ .img-wrapper img{
  transform: scale(0.9) translateX(77%) translateY(90%) rotateZ(80deg);
}

`;



const Front = styled.div`

  transform: rotateY(0deg) translateZ(160px); 
  border-radius: 34px 3px 0 0;
`;

const Right = styled.div`

opacity: 0;
  transform: rotateY(90deg) translateZ(160px);
  border-radius: 0 0 3px 15px;
`;

const Price = styled.p`
position: absolute;
bottom: 60px;
left: 10px;
font-size: 2rem;
opacity: .5;
`;

const ImgWrapper = styled.div`
  animation: ${float};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.390, 0.575, 0.565, 1.000);
  animation-direction: alternate;
  position: absolute;
  top: 0; right: 0;
  pointer-events: none;
  backface-visibility: hidden;
  `
const BoardImg = styled.img`
 transform-origin: top right;
  transition: transform 300ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  transition-delay: 100ms;
  transform: translateX(21%) rotateZ(13deg) skewX(3deg);
  pointer-events: none;
  width: 75%;
`

const H1 = styled.h1`
  margin: 0;
  font-size: 38px;
  color: black;
  letter-spacing: -.25px;
  transform: translateX(-44px);
  font-family: 'Helvetica'; 
  font-weight: 700;
`
const H2 = styled.h2`
  margin: 0;
  font-size: 21px;
  letter-spacing: -.25px;
 
  text-align: left;
  color: black;
  transform: translateX(-34px);
  font-family: 'Helvetica'; 
  font-weight: 700;
`

const P = styled.p`
margin: 0;
  font-weight: 300;
  font-size: 16px;
`

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
  @media (max-width: 500px) {
    padding-top: 4.8rem;
  }
`;

const Banner = styled.div`
  width: 90vw;
  height: 25vh;
  background-image: url(${backgroundSrc});
  background-size: cover;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  line-height: 0.2rem;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 500px) {
    height: 20vh;
  }
  
`;

const SubHeaderText = styled.p`
  text-shadow: 1px 1px #2b2b28;
`;


const Button = styled.button`
  width: 50%;
  height: 30px;
  align-self: center;
  border-radius: 5px;
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: 400px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #4b70e2;
  color: white;
  letter-spacing: 1.25px;
`;

const AddToFavourites = styled.img.attrs({
  src: `${heart}`,
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

