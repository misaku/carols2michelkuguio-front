import styled, {css} from 'styled-components';
import flower from '../../assets/flower-large.svg'
import {CardProps, WrapperCardProps} from "./about-us.types.tsx";
import {device} from "../../App.theme.ts";

export const MontserratTitle = styled.h1`
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 3rem;
    color: #a8735e;
    align-self: center;
    @media ${device.mobile} {
         font-size: 2.2rem;
     }
`
export const MontserratP = styled.p`
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    color: #9f9693;
    align-items: stretch;
    width: 100%;
    @media ${device.mobile} {
        font-size: 1.8rem;
     }
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

export const WrapperCard = styled.section<WrapperCardProps>`
    display: flex;
    flex-direction: row;
    text-align: justify;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    padding-top: 60px;
    ${props => props.invert && css`
        padding-top: 0px;
        padding-bottom: 60px;
        align-items: flex-end;
        justify-content: flex-end;
    `}

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
        top: -4px;
        left: -167px;
        transform: scaleX(-1) rotate(102deg);
        ${props => props.invert && css`
            content: "";
            right: -154px;
            bottom: -12px;
            left: auto;
            top: auto;
            transform: scaleX(-1) rotate(285deg);
        `} //filter: invert(7%) sepia(41%) saturate(237%) hue-rotate(-395deg) brightness(80%) contrast(90%)
    }
    @media ${device.desktop} {
    }
    @media ${device.laptop} {
    }
    @media ${device.tablet} {
        flex-direction: column;
        padding-top: 0;
        padding-bottom: 0;
        &::before {
        top: auto;
        bottom: -12px;
            }
    }
    @media ${device.mobile} {

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 36px solid transparent;
    --offset: 12px;
    --border-size: 1px;
    position: relative;
    max-width: 65%;
    z-index: 2;
    aspect-ratio: 7/4.8;
    @media ${device.desktop} {
        max-width: 70%;
        aspect-ratio: 7/4;
    }
    @media ${device.laptop} {
        aspect-ratio: 7/7;
    }
    @media ${device.tablet} {
        aspect-ratio: auto;
        max-width: 100%;
        align-self: flex-end;
        margin-top: -50px;
        ${props => props.invert && css`
            align-self: flex-start;
        `}
    }
    @media ${device.mobile} {
        width: 100%;
        align-self: center;
        aspect-ratio: auto;
        margin-top: 0px;
        padding: 2rem;
        border: 30px solid transparent;
    }
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
    
    p,strong {
        z-index: 2;
    }
    
`

export const Image = styled.img<WrapperCardProps>`
    height: auto;
    width: 40%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    object-fit: cover;
    aspect-ratio: 5 / 6;
    object-position: center top;
    border: 20px solid rgb(255, 255, 255);
    ${props => props.invert && css`
        right: auto;
        left: 0;
        top: auto;
        bottom: 0;
        object-position: bottom;
    `}
    @media ${device.desktop} {
    aspect-ratio: 6 / 6;
    width: 42%;
    }
    @media ${device.laptop} {
        aspect-ratio: 4 / 6.5;
    }
    @media ${device.tablet} {
        aspect-ratio: 6 / 6;
        width: 90%;
        position: relative;
        align-self: center;
    }
    @media ${device.mobile} {
        
    }
`
export const Wrapper = styled.div`
    height: auto;
    max-width: 100vw;
    overflow: hidden;
    padding-bottom: 30px;
    @media ${device.desktop} {
        //background-color: red;
        padding: 3rem;

    }
    @media ${device.laptop} {
        //background-color: #f1a447;
    }
    @media ${device.tablet} {
        //background-color: #1050f1;
    }
    @media ${device.mobile} {
        //background-color: #b700ff;
    }



`

