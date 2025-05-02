import styled, {css, keyframes} from 'styled-components'

import minhaFoto from '../../assets/groom-putting-ring-bride-s-finger.jpg'
import flower from '../../assets/flower-small.svg'
import {device} from "../../App.theme.ts";
import {ParallaxBanner} from "react-scroll-parallax";
const slideFromLeft = keyframes`
    from {
        transform: translateX(-100%) rotate(-0deg);
        opacity: 0;
        -moz-opacity: 0;
        -webkit-opacity: 0;
        -khtml-opacity: 0;
        -ms-opacity: 0;
        -o-opacity: 0;
    }
    to {
        transform: translateX(0) rotate(-130deg);
        opacity: 0.5;
        -moz-opacity: 0.5;
        -webkit-opacity: 0.5;
        -khtml-opacity: 0.5;
        -ms-opacity: 0.5;
        -o-opacity: 0.5;
    }
`;

const slideFromRight = keyframes`
    from {
        transform: translateX(100%) rotate(150deg);
        opacity: 0;
        -moz-opacity: 0;
        -webkit-opacity: 0;
        -khtml-opacity: 0;
        -ms-opacity: 0;
        -o-opacity: 0;
    }
    to {
        transform: translateX(0) rotate(50deg);
        opacity: 0.5;
        -moz-opacity: 0.5;
        -webkit-opacity: 0.5;
        -khtml-opacity: 0.5;
        -ms-opacity: 0.5;
        -o-opacity: 0.5;
    }
`;

const slideToUp = keyframes`
    from {
        transform: translateY(50%);
        opacity: 0;
        -moz-opacity: 0;
        -webkit-opacity: 0;
        -khtml-opacity: 0;
        -ms-opacity: 0;
        -o-opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
        -moz-opacity: 1;
        -webkit-opacity: 1;
        -khtml-opacity: 1;
        -ms-opacity: 1;
        -o-opacity: 1;
    }
`;

const slideToDown = keyframes`
    from {
        transform: translateY(-50%);
        opacity: 0;
        -moz-opacity: 0;
        -webkit-opacity: 0;
        -khtml-opacity: 0;
        -ms-opacity: 0;
        -o-opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
        -moz-opacity: 1;
        -webkit-opacity: 1;
        -khtml-opacity: 1;
        -ms-opacity: 1;
        -o-opacity: 1;
    }
`;
const zoom = keyframes`
    from {
        transform: scale(0%) rotate(150deg);
        opacity: 0;
        -moz-opacity: 0;
        -webkit-opacity: 0;
        -khtml-opacity: 0;
        -ms-opacity: 0;
        -o-opacity: 0;
    }
    to {
        transform: scale(100%) rotate(0deg);
        opacity: 1;
        -moz-opacity: 1;
        -webkit-opacity: 1;
        -khtml-opacity: 1;
        -ms-opacity: 1;
        -o-opacity: 1;
    }
`;

interface HeaderWrapperProps {
    menuIsOpen?: boolean;
}
export const HeaderWrapper = styled(ParallaxBanner)<HeaderWrapperProps>`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background-color: #815646;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh; /* O header ocupa 30% da tela */
    justify-content: flex-start;
    padding-bottom: 15rem;
    overflow: hidden;
    @media ${device.mobile} {
        ${({menuIsOpen}) => (menuIsOpen && css`
            padding-top: 300px;
            height: calc(100vh + 200px);
        `)}
    }
    &>div:first-child {
        background-image: linear-gradient(rgba(77, 48, 26, 0.5), rgba(85, 85, 85, 0.8)), url(${minhaFoto}) !important; /* Adiciona o gradiente com a imagem */
        opacity: 0.5;
        -moz-opacity: 0.5;
        -webkit-opacity: 0.5;
        -khtml-opacity: 0.5;
        -ms-opacity: 0.5;
        -o-opacity: 0.5;
        filter: blur(1px)
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 130px 100vw;
        border-color: transparent transparent #fff transparent;
    }
}

`;

export interface WrapperNavBarProps {
    isScrolled?: boolean;
}

export const WrapperNavBar = styled.div<WrapperNavBarProps>`
    width: 100%;
    min-height: 6rem;
    display: block;
    top: 0;
    position: fixed;
    z-index: 999;
    @media ${device.mobile} {
        ${({isScrolled, theme}) => (!isScrolled && css`
        background-color: rgba(0, 0, 0, 0.08);
        color: ${theme.colors.titleColor};
    `)}
    }
    ${({isScrolled, theme}) => (isScrolled && css`
        -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
        -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
        background-color: ${theme.colors.colorWhite}; /* Altera a cor com base no estado */
        color: ${theme.colors.titleColor};
    `)}
    transition: background-color 0.3s ease, color 0.3s ease;
    
`;
export interface NavBarProps {
    isScrolled?: boolean;
    isOpen?: boolean;
}
export const NavBar = styled.nav<NavBarProps>`
    width: 100%;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        height: 100%;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            min-height: 6rem;
            &:hover {
                background-color: rgba(0, 0, 0, 0.05);
            }

            a {
                display: flex;
                flex: 1;
                padding: 2rem;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                font-family: "Montserrat", "Open Sans", "Raleway", serif;
                font-optical-sizing: auto;
                font-weight: 400;
                font-style: normal;
                color: ${props => props.theme.colors.colorWhite};
                font-size: 1.4rem;
                height: 1.4rem;
                line-height: 1.4rem;
                text-transform: uppercase;
                ${({isScrolled, theme}) => (isScrolled && css` /* Altera a cor com base no estado */
                    color: ${theme.colors.defaultColor};
                `)}
                transition: color 0.3s ease;

            }

            &.active {
                background-color: ${({isScrolled, theme}) => (isScrolled ? theme.colors.titleColor : '#fff')};

                a {
                    color: ${({isScrolled, theme}) => (isScrolled ? '#fff' : theme.colors.titleColor)};
                }
            }
        }


    }


    @media ${device.mobile} {
        ${({isOpen}) => (!isOpen && css`
            visibility: hidden;
            display: none;
        `)}
        ul {
            flex-direction: column;
            align-self: stretch;
            display: flex;
            flex: 1;

            li {
                align-self: stretch;
            }
        }


    }
`;

export const MobileHeader = styled.div`
    display: none;
    visibility: hidden;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;

    @media ${device.mobile} {
        display: flex;
        visibility: visible;
    }
`
interface WrapperIconProps {
    isScrolled?: boolean;
}
export const WrapperIcon = styled.div<WrapperIconProps>`
    display: none;
    visibility: hidden;
    height: 5rem;
    width: 5rem;
    margin: 0.5rem;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: #fff;
    color: ${({isScrolled, theme})=>isScrolled?theme.colors.titleColor:theme.colors.colorWhite};
    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.05);
    }
    @media ${device.mobile} {
        display: flex;
        visibility: visible;
    }
`
export const HeaderText = styled.div`
    font-family: "Great Vibes", serif;
    display: flex;
    flex-direction: column;
    line-height: 10rem;
    font-style: normal;
    color: ${props => props.theme.colors.colorWhite};
    font-size: 10rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    text-shadow: 0px 0px 100px #1e0000;

    strong:first-child{
                animation: ${slideToUp} 1.5s ease-in-out forwards;
    }
    strong:last-child{
                animation: ${slideToDown} 1.5s ease-in-out forwards;
    }
    strong {
        display: block;
        font-size: 10rem;
        box-sizing: border-box;
        line-height: 13rem;
        height: 10rem;
        text-align: center;
        vertical-align: middle;
        padding-right: 1.6rem;
    }

    span {
        display: block;
        font-size: 4rem;
        box-sizing: border-box;
        line-height: 5.5rem;
        height: 4rem;
        text-align: center;
        vertical-align: middle;
        padding-right: 0.8rem;
        animation: ${zoom} 1.5s ease-in-out forwards;
    }

    @media ${device.mobile} {

        strong {
            font-size: 8rem;
        }

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
    padding: 5rem 14rem;
    position: relative;;

    &::before {
        background-image: url(${flower});
        content: "";
        width: 20rem;
        height: 20rem;
        position: absolute;
        bottom: 7rem;
        right: -2rem;
        z-index: 1;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        opacity: 0;
        -moz-opacity: 0;
        -webkit-opacity: 0;
        -khtml-opacity: 0;
        -ms-opacity: 0;
        -o-opacity: 0;
        transform: rotate(50deg);
        -webkit-transform: rotate(50deg);
        -moz-transform: rotate(50deg);
        -ms-transform: rotate(50deg);
        -o-transform: rotate(50deg);
        filter: opacity(100%)  invert(40%) sepia(100%) brightness(100%) contrast(80%) hue-rotate(-35deg) saturate(200%) drop-shadow(4px 4px 6px rgba(69, 46, 37, 0.5));
        animation: ${slideFromRight} 1.5s ease-in-out forwards;
    }

    &::after {
        background-image: url(${flower});
        content: "";
        width: 20rem;
        height: 20rem;
        position: absolute;
        bottom: 7rem;
        left: -2rem;
        z-index: 1;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        opacity: 0;
        -moz-opacity: 0;
        -webkit-opacity: 0;
        -khtml-opacity: 0;
        -ms-opacity: 0;
        -o-opacity: 0;
        transform: rotate(-130deg);
        -webkit-transform: rotate(-130deg);
        -moz-transform: rotate(-130deg);
        -ms-transform: rotate(-130deg);
        -o-transform: rotate(-130deg);
        filter: opacity(100%)  invert(40%) sepia(100%) brightness(100%) contrast(80%) hue-rotate(-35deg) saturate(200%) drop-shadow(4px 4px 6px rgba(69, 46, 37, 0.5));
        animation: ${slideFromLeft} 1.5s ease-in-out forwards;
    }

    @media ${device.mobile} {

        padding: 5rem 9rem;
        position: relative;;

        &::before, &::after {
            width: 18rem;
            height: 18rem;
        }
    }
`
