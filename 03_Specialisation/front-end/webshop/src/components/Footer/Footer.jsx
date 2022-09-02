import React from 'react'
import styled from 'styled-components'


export function Footer() {
    return (
        <Container>
            <div>Links go here</div>
            <div>More links go here</div>
            <div>Yet more links go here</div>
            <div>© Skippy's Vintage Skateboards - 2022</div>
        </Container>
    )
}

const Container = styled.footer`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 2rem;
  position: absolute;
  bottom: 0;
  border-top: 1px solid black;

`