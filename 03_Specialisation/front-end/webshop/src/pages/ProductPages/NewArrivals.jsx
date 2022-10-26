import styled from "styled-components";
import backgroundSrc from "./../../images/newArrivalsBanner.jpg";
import heart from "../../images/heart.svg";
import {float} from "../../assets/animation"
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
      <ProdContainer>
        {isLoading ? (<p>Loading...</p>) :
          error ? (<p>An error occured..</p>) :
            (<>
              {data?.map((product) =>
                product.category === "NewArrival" ?
                  <Product key={product.id}>
                    <AddToFavourites
                      alt="add to Favourites"
                      onClick={() => handleAddToFavourites(product)} />
                    <ProdImg src={product.image} alt={product.name} />
                    <Title> {product.title} </Title>
                    <Details>
                      <span>{product.desc}</span>
                      <PriceOriginal>€ {product.price}</PriceOriginal>
                    </Details>
                    <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                  </Product>
                  : <></>)
              }
            </>)
        }
      </ProdContainer>

      <AnimContainer>
        <Wrapper>
          <Card>
            <Front>
              <H1>Signature</H1>
              <P>7.7 deck<Span>2018</Span></P>
              <Price>$ 89.00</Price>
            </Front>

            <Right className="right">
              <H2>Signature</H2>
              <Ul>
                <Li>Width	7.7"</Li>
                <Li>Length	31.75"</Li>
                <Li>Wheelbase	14"</Li>
                <Li>Nose	6.875"</Li>
                <Li>Tail	6.25"</Li>
              </Ul>
              <Button>Add to cart, yo</Button>
            </Right>

          </Card>
          {/* <ImgWrapper className="img-wrapper">
            <BoardImg src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png' alt='' /> */}
            <ImgWrapper className="img-wrapper">
            <BoardImg src='https://res.cloudinary.com/ordinator/image/upload/v1666793669/SkippySkateboards/hulkdeck_reafuw.png' alt='' />
          
            
          </ImgWrapper>
        </Wrapper>
      </AnimContainer>


      <StartShopping>
        <Link to="/"><h4>Back to main..</h4></Link>
      </StartShopping>
    </Container>
  );
};

// Styled Components

const Wrapper = styled.div`
  width: 280px;
  height: 480px;
  perspective: 600px;
  position: relative;
`;

const Card = styled.div`
  width: 320px;
  height: 450px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-140px);
  transition: transform 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  cursor: pointer;

  > div{
  position: absolute;
  width: 320px;
  height: 450px;
  padding: 34px 21px;
  transition: all 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000); 
  }

  &:hover{
  transform: translateZ(-160px) rotateY( -90deg);
  }

  &:hover .front{
  opacity: 0; 
  }
  
  &:hover .right{
  opacity: 1; 
  }

  &:hover ~ .img-wrapper img{
  transform: scale(0.9) translateX(77%) translateY(90%) rotateZ(80deg);
}

`;

const Span = styled.span`
  margin-left: 13px;
  opacity: .55;
`

const Front = styled.div`
 background-image: linear-gradient(180deg, rgba(145,141,144,1) 0%, rgba(92,91,94,0) 100%);
  transform: rotateY(0deg) translateZ(160px); 
  border-radius: 34px 3px 0 0;
`;

const Right = styled.div`
background-image: linear-gradient(0deg, rgba(145,141,144,1) 0%, rgba(92,91,94,0) 100%);
opacity: 0.08;
  transform: rotateY(90deg) translateZ(160px);
  border-radius: 0 0 3px 34px;
`;

const Price = styled.p`
position: absolute;
bottom: 34px;
left: 21px;
font-size: 34px;
opacity: .34;
`;

const ImgWrapper = styled.div`
  /* animation: float 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate; */
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


  



const AnimContainer = styled.div`
 display: flex;
  width: 100vw;
  height: 60vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-image: linear-gradient(-55deg, rgba(50,45,55,1) 0%, rgba(101,96,106,1) 100%);
  color: #f5f5f5;
  font-family: 'Roboto';
  font-weight: 300;
  /* animation: fadeIn .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1; */
`;



const BoardImg = styled.img`
 transform-origin: top right;
  transition: transform 300ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  transition-delay: 100ms;
  transform: translateX(21%) rotateZ(13deg) skewX(3deg);
  pointer-events: none;
`

const H1 = styled.h1`
  margin: 0;
  font-size: 38px;
  letter-spacing: -.25px;
  transform: translateX(-44px);
  font-family: 'Helvetica'; 
  font-weight: 700;
`
const H2 = styled.h2`
  margin: 0;
  font-size: 21px;
  letter-spacing: -.25px;
  transform: translateX(-34px);
  font-family: 'Sarala'; 
  font-weight: 700;
`

const P = styled.p`
margin: 0;
  font-weight: 300;
  font-size: 16px;
`

const Ul = styled.ul`
  margin-left: 21px;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  list-style: none;
`

const Li = styled.li`
padding-bottom: 8px;
  position: relative;
  &:before{
  content: 'x';
  position: absolute;
  left: -21px;
  opacity: .55;
}
`;






















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
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
              5px 5px 5px rgba(255, 255, 255, 0.5), 
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

const PriceOriginal = styled.span`
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

