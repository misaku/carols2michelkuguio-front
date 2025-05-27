import styled, {css} from 'styled-components'

import minhaFoto from '../../assets/flowb.jpeg'
import flower from '../../assets/flower-small.svg'
import {ParallaxBanner} from "react-scroll-parallax";


export const HeaderWrapper = styled(ParallaxBanner)`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background-color: #815646;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    width: 100%;
    height: 40rem;
    justify-content: flex-start;
    overflow: hidden;
    z-index: -2;

    & > div:first-child {
        z-index: 0; /* Mantém esse pseudo-elemento atrás do conteúdo */
        background-image: linear-gradient(rgba(77, 48, 26, 0.5), rgba(85, 85, 85, 0.8)), url(${minhaFoto}) !important; /* Adiciona o gradiente com a imagem */
        opacity: 0.8;
        -moz-opacity: 0.8;
        -webkit-opacity: 0.8;
        -khtml-opacity: 0.8;
        -ms-opacity: 0.8;
        -o-opacity: 0.8;
        filter: blur(1px);
        transform: rotate(9deg);
    }
}
`;


interface ContainerSubHeaderProps {
    invert?: boolean
}

export const ContainerSubHeader = styled.div<ContainerSubHeaderProps>`
    display: flex;
    flex: 1;



    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 130px 0 0 105vw;
        border-color: transparent transparent transparent #fff;

    }

    ${({invert}) => invert && css`
        &::after {
            border-width: 130px 100vw 0 0;
            border-color: transparent #fff transparent transparent;
        }
    `}
`;

export const HeaderText = styled.div`
    font-family: "Great Vibes", serif;
    display: flex;
    flex-direction: column;
    font-style: normal;
    color: white;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    text-shadow: 0px 0px 100px #1e0000;

    strong {
        display: block;
        font-size: 5rem;
        box-sizing: border-box;
        line-height: 5rem;
        height: 5rem;
        text-align: center;
        vertical-align: middle;
        padding-right: 0.6rem;

    }
`;


export const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const WrapperContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Ring = styled.div`
    height: 2rem;
    width: 2rem;
    border: solid 2px #000;
    position: relative;
    border-radius: 100%;
    display: flex;
    opacity: 0.5;

    &::before {
        content: "";
        height: 2rem;
        width: 2rem;
        aspect-ratio: 1/1;
        border: solid 2px #CCC;
        position: absolute;
        display: block;
        border-radius: 100%;
        left: -1rem;
        //top: -0.2rem;
        top: 1rem;

    }

    &::after {
        content: "";
        height: 2rem;
        width: 2rem;
        aspect-ratio: 1/1;
        border: solid 2px #f1a447;
        position: absolute;
        display: block;
        border-radius: 100%;
        right: -1rem;
        //top: -0.2rem;
        top: 1rem;

    }
`
export const Line = styled.div`
    padding: 1rem 5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    &::before {
        content: "";
        background-image: url(${flower});
        width: 10rem;
        height: 10rem;
        position: absolute;
        bottom: -2rem;
        right: -6.5rem;
        z-index: 1;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        opacity: 0.5;
        -moz-opacity: 0.5;
        -webkit-opacity: 0.5;
        -khtml-opacity: 0.5;
        -ms-opacity: 0.5;
        -o-opacity: 0.5;
        transform: rotate(136deg);
        filter:  opacity(60%) invert(24%) sepia(50%)  brightness(100%) contrast(100%) hue-rotate(-56deg) saturate(400%) drop-shadow(4px 4px 6px rgba(69, 46, 37, 0.5));
    }

    &::after {
        content: "";
        background-image: url(${flower});
        width: 10rem;
        height: 10rem;
        position: absolute;
        bottom: -4rem;
        right: 9rem;
        z-index: 1;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        opacity: 0.5;
        -moz-opacity: 0.5;
        -webkit-opacity: 0.5;
        -khtml-opacity: 0.5;
        -ms-opacity: 0.5;
        -o-opacity: 0.5;
        transform: rotate(-31deg);
        filter:  opacity(60%) invert(24%) sepia(50%)  brightness(100%) contrast(100%) hue-rotate(-56deg) saturate(400%) drop-shadow(4px 4px 6px rgba(69, 46, 37, 0.5));
    }
`
