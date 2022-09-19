import React from 'react'
import styled from 'styled-components'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import tiktok from '../../images/tiktok.svg'



export function Footer() {
    return (
        <Container>
            <Socials>
                <Instagram/>
                <Facebook/>
                <Tiktok/>
            </Socials>
            <Copyright>© Skippy's Vintage Skateboards - 2022</Copyright>
        </Container>
    )
}

const Container = styled.footer`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  margin-top: 2rem;
  position: absolute;
  bottom: 0;
  border-top: 1px solid black;
`;
const Socials = styled.div`
padding-left: 3.5rem;
`

const Copyright = styled.div`
padding-right: 3.5rem;
`;

const Facebook = styled.img.attrs({
    src: `${facebook}`
  })`
  height: 2em;
  align-self: flex-end;
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  `;

const Instagram = styled.img.attrs({
    src: `${instagram}`
  })`
  height: 2em;
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  `;

const Tiktok = styled.img.attrs({
    src: `${tiktok}`
  })`
  height: 2em;
  align-self: flex-end;
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  `;


