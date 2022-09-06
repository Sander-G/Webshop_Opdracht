import React from 'react'
import styled from 'styled-components';

const NotFound = () => {
  return (
    <>
    <Not_Found>
    <h1>404</h1>
    <h2>Page not found...</h2> 
    </Not_Found>
    </>
  )
};

export default NotFound;

const Not_Found = styled.div`
font-size:2rem;
line-height: 0.1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: rgb(68,68,68);
min-height: 80vh;
`
