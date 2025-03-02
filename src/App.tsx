import {Header} from './components/Header'
import {GlobalStyle} from './App.styles'

import styled from 'styled-components';
import {AboutUs} from "./components/AboutUs";
import {SubHeader} from "./components/SubHeader";

export const PlayFairTitle = styled.h1`
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: < weight >;
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


function App() {

    return (
        <>
            <GlobalStyle/>
            <Header></Header>
            <AboutUs />
            <SubHeader />
        </>
    )
}

export default App
