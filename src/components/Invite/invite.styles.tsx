import styled, {css} from 'styled-components';
import flower from '../../assets/flower-large.svg'
import {CardProps, WrapperCardProps} from "./invite.types.tsx";
import L from "lottie-react";
import {device} from "../../App.theme.ts";

export const WrapperLottie = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    position: relative;
    height: 50px;
`
export const Lottie = styled(L)`
    max-width: 100px;
    position: absolute;
    top: -12px;
`
export const Container = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: justify;
    align-items: center;
    @media ${device.mobile} {
   
    }
`

export const WrapperCard = styled.section<WrapperCardProps>`
    display: flex;
    flex-direction: row;
    text-align: justify;
    align-items: center;
    justify-content: center;
    position: relative;
    flex: 1;
    
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
    border-top-color: ${props => props.theme.colors.borderColor};
    border-bottom-color: ${props => props.theme.colors.borderColor};

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
    border-left-color: ${props => props.theme.colors.borderColor};
    border-right-color: ${props => props.theme.colors.borderColor};

    &::before {
        top: calc(var(--offset) - var(--border-size));
        bottom: calc(var(--offset) - var(--border-size));
        left: calc(var(--horizontal-offset) - var(--border-size));
        right: calc(var(--horizontal-offset) - var(--border-size))
    }

`

export const  Label = styled.label`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${props => props.theme.colors.titleColor};
    margin-bottom: 1rem;
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-left: 35px;
    input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ .checkmark {
            background-color: ${props => props.theme.colors.borderColor};
            &:after {
                display: block !important;
                left: 7px;
                top: 3px;
                width: 10px;
                height: 15px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }
    }
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        border-radius: 3px;
        background-color: #eee;
        &:after {
            content: "";
            position: absolute;
            display: none;
            left: 7px;
            top: 3px;
            width: 10px;
            height: 15px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            
        }
    }
    &:hover input ~ .checkmark {
        background-color: #ccc;
        &:after {
            display: block !important;
            left: 7px;
            top: 3px;
            width: 10px;
            height: 15px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }
`

export const Card = styled.div<CardProps>`
    padding: 3rem;
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

    @media ${device.tablet} {
        max-width: 100%;
        border: 30px solid transparent;
    }

`
export const Wrapper = styled.div`
    height: auto;
    max-width:100vw;
    overflow: hidden;
    padding:  94px 70px 300px 70px;
    @media ${device.tablet} {
        max-width: 100%;
        padding:  94px 40px 94px 40px;
    }
`
interface ButtonProps {
    invert?: boolean;
}
export const Button = styled.button<ButtonProps>`
    padding: 1rem;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${props =>props.invert? props.theme.colors.colorWhite: props.theme.colors.borderColor};
    color: ${props =>props.invert? props.theme.colors.titleColor: props.theme.colors.colorWhite};
    font-weight: 400;
    border: solid 1px ${props =>props.invert? props.theme.colors.borderColor: props.theme.colors.titleColor};
    border-radius: 3px;
    cursor: pointer;
    &:hover{
        background: ${props =>props.invert? '#f4f4f4': '#a0715e'};
    }
`
export const Search = styled.div`
    height: 50px;
    border-radius: ${props => props.theme.measures.borderMaxRadius};
    display: flex;
    input{
        border: solid 1px #f0f0f0;
        border-bottom-left-radius: ${props => props.theme.measures.borderMaxRadius};
        border-top-left-radius: ${props => props.theme.measures.borderMaxRadius};
        flex: 1;
        padding: 10px 20px;
        &:active, &:focus{
            outline: none;
            border: ${props => `solid 1px ${props.theme.colors.titleColor}`}; 
            color: ${props => props.theme.colors.titleColor};
        }
    }
    button{
        border: ${props => `solid 1px ${props.theme.colors.titleColor}`};
        border-bottom-right-radius: ${props => props.theme.measures.borderMaxRadius};
        border-top-right-radius: ${props => props.theme.measures.borderMaxRadius};
        background-color: ${props => props.theme.colors.borderColor};
        color: ${props => props.theme.colors.colorWhite};
        padding: 10px 30px;
        &:hover{
            cursor: pointer;
            background-color: ${props => props.theme.colors.titleColor};
        }
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
    font-size: 1.7rem;
    color: ${props => props.theme.colors.defaultColor};
    text-align: justify;
    align-items: stretch;
    width: 100%;
    gap: 2rem;

    h1 {
        font-weight: 500;
        font-style: normal;
        font-size: 3rem;
        color: ${props => props.theme.colors.titleColor};
        align-self: center;
    }
    strong {
        font-weight: bold;
    }
    @media ${device.mobile} {

        h1 {
        
            font-size: 2rem;

        }

    }
`
export const ColorBox = styled.div`
    width: 40px;
    height: 40px;
    @media ${device.mobile} {
        width: 26px;
        height: 26px;
    }
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
    @media ${device.mobile} {
    aspect-ratio: 7 / 6;
        max-width: 234px;
    }
`
interface ContainerCardProps {
    both?: boolean;
}
export const ContainerCard = styled.div<ContainerCardProps>`
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    ${props => props.both && css`
        flex-direction: column ;
    `}
    @media ${device.tablet} {
        flex-direction: column ;
    }
`
export const ContainerImageCard = styled.div`
    display: flex;
    gap: 2rem;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    @media ${device.tablet} {
        flex-direction: column ;

    }
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
        color: ${props => props.theme.colors.titleColor};
    }
    align-items: center;
    justify-content: center;
    
}
`

export const WrapperButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-self: flex-end;
}
`



