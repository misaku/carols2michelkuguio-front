import styled, {css} from 'styled-components'

import minhaFoto from '../../assets/groom-putting-ring-bride-s-finger.jpg'
import {device} from "../../App.theme.ts";
import {ParallaxBanner} from "react-scroll-parallax";


interface HeaderWrapperProps {
    open?: boolean;
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
        ${({open}) => (open && css`
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
    hasCart?:boolean;
}

export const WrapperNavBar = styled.div<WrapperNavBarProps>`
    width: 100%;
    min-height: 60px;
    display: block;
    top: 0;
    position: fixed;
    z-index: 999;
    ${({hasCart}) => (hasCart && css`
        padding-right: 60px;    
    `)}
    ${({theme}) => (css`
        -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
        -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
        background-color: ${theme.colors.colorWhite}; /* Altera a cor com base no estado */
        color: ${theme.colors.titleColor};
    `)}
    
`;
export interface NavBarProps {
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
            min-height: 60px;
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
                ${({theme}) => ( css` /* Altera a cor com base no estado */
                    color: ${theme.colors.defaultColor};
                `)}
                transition: color 0.3s ease;

            }

            &.active {
                background-color: ${({ theme}) => theme.colors.titleColor};

                a {
                    color: #FFF;
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
    color: ${({theme})=>theme.colors.titleColor};
    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.05);
    }
    @media ${device.mobile} {
        display: flex;
        visibility: visible;
    }
`

