import React from 'react'
import styled from 'styled-components';
import four from "../../images/four.png"
import zero from "../../images/zero.png"

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
    <Not_Found>
    <Numbers>
    <Four/><Zero/><Four/>
    </Numbers>
    <ErrorMsg>Page not found...</ErrorMsg> 

    <StartShopping>
                  <Link to="/"><h4>Continue Shopping..</h4></Link>
                </StartShopping>
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
`;

const Numbers = styled.div`
display: flex;
flex-direction: row;
`;

const Four = styled.img.attrs({
  src: `${four}`
})`
max-height: 20vh;
display:flex;
`;

const Zero = styled.img.attrs({
  src: `${zero}`
})`
max-height: 20vh;
display:flex;
`;

const ErrorMsg = styled.h2`
color: black;
`;

const StartShopping = styled.div`
  font-size: 14px;
  
  font-weight: 600;
  & h4 {
    color: #d7732b;
    text-shadow: none;
  };
`;




