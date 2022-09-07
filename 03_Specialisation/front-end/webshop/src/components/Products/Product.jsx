import React from 'react'
import styled from 'styled-components'
// import PicSrc from '../../data/imgs/product1.jpg'

export default function Product() {
  return (
    
    
    <ProductPage>
      <PictureDiv>
      {/* <ProductPicture /> */}
      </PictureDiv>
        <ProductInfo>
            <p>ID</p> 
            <p>Category</p>
            <p>Title</p>
            <p>Description:</p>
            <p>Price: €100</p>

            <button>View Item</button>
            <button>Add to Cart</button>
            <button>Add to Wishlist</button>
    </ProductInfo>

    </ProductPage>


  )
}



const ProductPage = styled.div`
  width: 28.5vw;
  min-height: 28.5vh;
  color: black;
  font-size: 1em;
  border-radius: 5px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;  
  border: 1px solid black;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const PictureDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
position: relative;
`;


// const ProductPicture = styled.img.attrs({
//   src: `${PicSrc}`
// })`
//   padding: .1rem;
//   overflow: none;
//   object-fit: contain;


// `;

const ProductInfo = styled.div`
display: flex;
flex-direction: column;
align-items: left;
padding: 0.4em;
`;
