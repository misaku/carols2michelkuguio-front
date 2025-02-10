import styled from 'styled-components'

import minhaFoto from '../../assets/groom-putting-ring-bride-s-finger.jpg'
import flower from '../../assets/flower-small.svg'
import {TimeLeft} from "../TimeLeft";


export const HeaderWrapper = styled.header`
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

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0; /* Mantém esse pseudo-elemento atrás do conteúdo */
        background-size: cover;
        background-position: center;
        background-image: linear-gradient(rgba(77, 48, 26, 0.5), rgba(85, 85, 85, 0.8)), url(${minhaFoto}); /* Adiciona o gradiente com a imagem */
        opacity: 0.5;
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

export const WrapperNavBar = styled.div`
    width: 100%;
    height: 6rem; 
    position: absolute;
    display: block;
    top: 0;
`;

export const NavBar = styled.nav`
    width: 100%;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        display: flex;
        gap: 1.6rem;
        list-style: none;
    }

    a {
        text-decoration: none;
        font-family: "Montserrat", "Open Sans", "Raleway", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        color: #fff;
        font-size: 1.4rem;
        height: 1.4rem;
        line-height: 1.4rem;
        text-transform: uppercase;
    }
`;


const HeaderText = styled.div`
    font-family: "Great Vibes", serif;
    display: flex;
    flex-direction: column;
    line-height: 10rem;
    font-style: normal;
    color: white;
    font-size: 10rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    text-shadow: 0px 0px 100px #1e0000;
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
    }
`;


const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const WrapperContent = styled.div`
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
        opacity: 0.5;
        transform: rotate(50deg);
        -webkit-transform: rotate(50deg);
        -moz-transform: rotate(50deg);
        -ms-transform: rotate(50deg);
        -o-transform: rotate(50deg);
        filter: invert(24%) sepia(93%) saturate(610%) hue-rotate(-56deg) brightness(92%) contrast(87%);
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
        opacity: 0.5;
        transform: rotate(-130deg);
        -webkit-transform: rotate(-130deg);
        -moz-transform: rotate(-130deg);
        -ms-transform: rotate(-130deg);
        -o-transform: rotate(-130deg);
        filter: invert(24%) sepia(93%) saturate(610%) hue-rotate(-56deg) brightness(92%) contrast(87%);
    }
`
export const Header = () => {
    const targetDate = "2025-09-27T17:00:00Z";
    return (
        <>
            <HeaderWrapper>
                <WrapperNavBar>
                    <NavBar>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#">Nossa História</a></li>
                            <li><a href="#">Confirmação</a></li>
                            <li><a href="#">Conheça os Padrinhos</a></li>
                            <li><a href="#">O Casamento</a></li>
                            <li><a href="#">Local</a></li>
                            <li><a href="#">Galeria</a></li>
                        </ul>
                    </NavBar>
                </WrapperNavBar>
                <ContentHeader>
                    <WrapperContent>
                        <HeaderText>
                            <strong>Carol</strong>
                            <span>&</span>
                            <strong>Michel</strong>
                        </HeaderText>
                    </WrapperContent>


                </ContentHeader>
                <TimeLeft targetDate={targetDate}/>
            </HeaderWrapper>
        </>

    );
};