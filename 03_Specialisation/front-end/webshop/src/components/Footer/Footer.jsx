import React from 'react'
import styled from 'styled-components'
import { colors } from '../../elements/GlobalStyle'

export default function Footer() {
    return (
        <Container>
            <div>Links go here</div>
            <div>More links go here</div>
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