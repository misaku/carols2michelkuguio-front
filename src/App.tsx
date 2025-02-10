import {useState} from 'react'
import {Header} from './components/header'
import {GlobalStyle} from './App.styles'

import styled, { css} from 'styled-components';
import noiva from './assets/noiva.jpg'
import noivo from './assets/noivo.jpg'

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


// <weight>: Use a value from 100 to 900
export const MontserratTitle = styled.h1`
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 3rem;
    color: #a8735e;
`
export const MontserratP = styled.p`
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    color: #9f9693;
`

export const Container = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: justify;
    align-items: center;
`
export const Container0 = styled.section`
    display: flex;
    flex-direction: row;
    text-align: justify;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
`
export const HorizontMarging = styled.div`
    --vertical-offset: calc(var(--offset) * -1);
    border-top: var(--border-size) solid currentcolor;
    border-bottom: var(--border-size) solid currentcolor;
    top: calc(var(--border-size) * -1) !important;;
    bottom: calc(var(--border-size) * -1) !important;;
    border-top-color: #ae8472;
    border-bottom-color: #ae8472;

    &::before {
        top: calc(var(--vertical-offset) - var(--border-size));
        bottom: calc(var(--vertical-offset) - var(--border-size));
        left: calc(var(--offset) - var(--border-size));
        right: calc(var(--offset) - var(--border-size));
    }
`
export const VerticalMarging = styled.div`
    --horizontal-offset: calc(var(--offset) * -1);
    border-left: var(--border-size) solid currentcolor;
    border-right: var(--border-size) solid currentcolor;
    right: calc(var(--border-size) * -1) !important;
    left: calc(var(--border-size) * -1) !important;;
    border-left-color: #ae8472;
    border-right-color: #ae8472;

    &::before {
        top: calc(var(--offset) - var(--border-size));
        bottom: calc(var(--offset) - var(--border-size));
        left: calc(var(--horizontal-offset) - var(--border-size));
        right: calc(var(--horizontal-offset) - var(--border-size))
    }

`
interface CardProps {
    invert?: boolean;
}
export const Card = styled.div<CardProps>`
    padding: 4rem;
    border: 36px solid transparent;
    --offset: 12px;
    --border-size: 1px;
    position: relative;
    right: -70px;
    top: 69px;
    ${props => props.invert && css`
        left: -70px;
        top: 0px;
    `}
    background-color: rgb(255, 255, 255);
    -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    ${HorizontMarging}, ${VerticalMarging} {
        position: absolute;
        top: var(--horizontal-offset, 0);
        right: var(--vertical-offset, 0);
        bottom: var(--horizontal-offset, 0);
        left: var(--vertical-offset, 0);
        transition: transform .8s ease;
        will-change: transform;
        z-index: 1;
        -khtml-opacity: 0.5;
        -moz-opacity: 0.5;
        opacity: .5;
    }

    ${HorizontMarging}::before, ${VerticalMarging}::before {
        content: "";
        position: absolute;
        border: inherit;
        box-sizing: border-box;
    }

        // ${HorizontMarging},${VerticalMarging},${HorizontMarging}::before,${VerticalMarging}::before{
    //     border-radius: 5px;
    // }


`

const Image = styled.img`
    height: auto;
    width: 40%;
    object-fit: cover;
    aspect-ratio: 5 / 6;
    object-position: center top;
    border: 32px solid rgb(255, 255, 255);
`

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <GlobalStyle/>
            <Header></Header>
            <Container>
                <MontserratTitle>Ele perguntou e ela disse sim!</MontserratTitle>
                <MontserratP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus nec orci eleifend
                    accumsan. Nullam ut ornare metus. Phasellus eu pulvinar purus. Praesent ut tortor eget arcu tempus
                    luctus non non magna. Donec at nisl quis lectus porttitor cursus. Aliquam egestas sagittis auctor.
                    In at lobortis nisl. Nunc at eros quis arcu rutrum eleifend eu eget nibh. Nullam eget posuere nibh.
                    Nam nec nisi sit amet metus egestas rutrum. Pellentesque at ultricies tellus. Sed posuere molestie
                    diam nec pharetra.
                </MontserratP>

                <Container0>
                    <Card>
                        <HorizontMarging/>
                        <VerticalMarging/>
                        <MontserratTitle>Michel</MontserratTitle>
                        <MontserratP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus nec orci
                            eleifend accumsan. Nullam ut ornare metus. Phasellus eu pulvinar purus. Praesent ut tortor
                            eget arcu tempus luctus non non magna. Donec at nisl quis lectus porttitor cursus. Aliquam
                            egestas sagittis auctor. In at lobortis nisl. Nunc at eros quis arcu rutrum eleifend eu eget
                            nibh. Nullam eget posuere nibh. Nam nec nisi sit amet metus egestas rutrum. Pellentesque at
                            ultricies tellus. Sed posuere molestie diam nec pharetra.
                        </MontserratP>
                    </Card>
                    <Image src={noivo} alt={"sad"}/>
                </Container0>
                <Container0>
                    <Image src={noiva} alt={"sad"}/>
                    <Card invert={true}>
                        <HorizontMarging/>
                        <VerticalMarging/>
                        <MontserratTitle>Carol</MontserratTitle>
                        <MontserratP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus nec orci
                            eleifend accumsan. Nullam ut ornare metus. Phasellus eu pulvinar purus. Praesent ut tortor
                            eget arcu tempus luctus non non magna. Donec at nisl quis lectus porttitor cursus. Aliquam
                            egestas sagittis auctor. In at lobortis nisl. Nunc at eros quis arcu rutrum eleifend eu eget
                            nibh. Nullam eget posuere nibh. Nam nec nisi sit amet metus egestas rutrum. Pellentesque at
                            ultricies tellus. Sed posuere molestie diam nec pharetra.
                        </MontserratP>
                    </Card>

                </Container0>
            </Container>


        </>
    )
}

export default App
