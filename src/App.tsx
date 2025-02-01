import { useState } from 'react'
import { Header } from './components/header'
import {GlobalStyle} from './App.styles'

import styled from 'styled-components';

export const PlayFairTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
`

export const GreatVibesTitle = styled.h1`
  font-family: "Great Vibes", serif;
  font-weight: 400;
  font-style: normal;
`

//700 BOLD AMATIC;
export const AmaticSCTitle = styled.h1`
  font-family: "Amatic SC", serif;
  font-weight: 400;
  font-style: normal;
`



// font-weight: Use a value from 300 to 800
export const OpenSansTitle = styled.h1`
  font-family: "Open Sans", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
`

// <weight>: Use a value from 100 to 900
export const MontserratTitle = styled.h1`
font-family: "Montserrat", serif;
font-optical-sizing: auto;
font-weight: 300;
font-style: normal;
`

// <weight>: Use a value from 100 to 900
export const RalewayTitle = styled.h1`
font-family: "Raleway", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
`


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <PlayFairTitle>Carol + Michel</PlayFairTitle>
      <GreatVibesTitle>Carol + Michel</GreatVibesTitle>
      <AmaticSCTitle>Vamos nos Casar!</AmaticSCTitle>
      <OpenSansTitle>Vamos nos casar</OpenSansTitle>
      <MontserratTitle>Vamos nos casar</MontserratTitle>
      <RalewayTitle>Vamos nos casar</RalewayTitle>
    </>
  )
}

export default App
