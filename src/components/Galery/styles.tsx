import styled from 'styled-components';
import flower from '../../assets/flower-large.svg'
import {device} from "../../App.theme.ts";
export const Container = styled.div`
    .gallery a img {
        transition: filter 0.2s, opacity 0.2s;
        border-radius: 7px;
    }

    .gallery a:hover img,
    .gallery a:focus img {
        /* Efeito escurecido */
        filter: brightness(0.6) grayscale(40%);
        /* ou overlay de cor */
        /* opacity: 0.7; */
    }
    max-width: 1200px;
    padding: 4rem;
    margin: 0 auto;
`;
export interface WrapperCardProps {
    invert?: boolean;
}

export const WrapperCard = styled.section<WrapperCardProps>`
    flex: 1;
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
        bottom: -0px;
        right: -140px;
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
        left: -170px !important;
        top: 20px !important;
        left: auto;
        top: auto;
        transform: scaleX(-1) rotate(285deg);
    }
`

export const Text = styled.p`
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: italic;
    font-size: 2rem;
    color: #9f9693;
    align-items: stretch;
    text-align: center;
    margin-bottom: 4rem;
    width: 100%;
    @media ${device.mobile} {
        font-size: 1.8rem;
    }
`

