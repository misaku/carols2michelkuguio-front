import styled, {css} from 'styled-components';
import flower from '../../assets/flower-large.svg'
import {CardProps, WrapperCardProps} from "./invite.types.tsx";


export const Container = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: justify;
    align-items: center;
`

export const WrapperCard = styled.section<WrapperCardProps>`
    display: flex;
    flex-direction: row;
    text-align: justify;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;

    &::before {
        content: "";
        width: 400px;
        height: 400px;
        position: absolute;
        z-index: -1;
        background-position: center center;
        background-image: url(${flower});
        clip-path: inset(0 0 0 0);
        background-repeat: no-repeat;
        background-size: contain;
        top: -75px;
        left: -170px;
        transform: scaleX(-1) rotate(102deg);
    }

    &::after {
        content: "";
        width: 400px;
        height: 400px;
        position: absolute;
        z-index: -1;
        background-position: center center;
        background-image: url(${flower});
        clip-path: inset(0 0 0 0);
        background-repeat: no-repeat;
        background-size: contain;
        right: -170px !important;
        bottom: -75px !important;
        left: auto;
        top: auto;
        transform: scaleX(-1) rotate(285deg);
    }
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


export const Card = styled.div<CardProps>`
    padding: 4rem;
    border: 36px solid transparent;
    --offset: 12px;
    --border-size: 1px;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
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
export const Wrapper = styled.div`
    height: auto;
    max-width:100vw;
    overflow: hidden;
    padding: 70px;
    padding-bottom: 300px;
    padding-top: 94px;
`
export const Button = styled.button`
    margin-top: 4rem;
    padding: 1rem;
    background: #ae8472;
    color: #fff;
    font-weight: 400;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
        background: #a0715e;
    }
`
export const ContentCard = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    color: #9f9693;
    text-align: justify;
    align-items: stretch;
    width: 100%;
    gap: 2rem;
    h1{
        font-weight: 500;
        font-style: normal;
        font-size: 3rem;
        color: #a8735e;
        align-self: center;
    }
`
export const ColorBox = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 3px;
    background-color: ${props => props.color};
;
`
export const ColorPalettes = styled.div`
   display: flex;
    gap: 1rem;
;
`

export const Image = styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 5 / 6;
    object-position: center top;
    border-radius: 3px;
`
export const ContainerCard = styled.div`
    display: flex;
    gap: 2rem;
`
export const SectionCard = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const WrapperImage = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    height: auto;
    width: 100%;
    max-width: 340px;
    gap: 2rem;
    strong{
        text-transform: uppercase;
        color: #a8735e;
    }
    
}
`



