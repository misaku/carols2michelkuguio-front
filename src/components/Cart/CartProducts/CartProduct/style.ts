import styled from 'styled-components';
import color from "color";

export const Container = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 5%;

    transition: background-color 0.2s, opacity 0.2s;

    &::before {
        content: '';
        width: 90%;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 0;
        left: 5%;
    }
`;

export const Details = styled.div`
    width: 57%;
    display: inline-block;
    vertical-align: middle;
`;

export const Title = styled.p`
    color: #FFF;
    margin: 0;
    font-size: 1.4rem;
`;

export const Desc = styled.p`
    color: ${({theme}) => color(theme.colors.primary).lighten(0.9).toString()};
    font-size: 1.2rem;
    margin: 0;
`;

export const Price = styled.div`
    display: inline-block;
    vertical-align: middle;
    color: ${({theme}) => color(theme.colors.secondary).lighten(0.4).toString()};
    text-align: right;
    font-size: 1.4rem;
    width: 25%;
`;

export const DeleteButton = styled.button`
    width: 16px;
    height: 16px;
    top: 15px;
    right: 5%;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    cursor: pointer;
    border: 0;
    font-size: 1.6rem;
    font-weight: bold;
    background-color: transparent;
    color: ${({theme}) => color(theme.colors.primary).darken(0.3).toString()};
    &:focus-visible {
        outline: 3px solid ${({theme}) => theme.colors.secondary};
    }

    &:hover {
        color: ${({theme}) => theme.colors.secondary};
    }
`;

export const ChangeQuantity = styled.button`
    color: ${({theme}) => color(theme.colors.primary).lighten(0.9).toString()};
    border: 0;
    background-color: ${({theme}) => color(theme.colors.primary).darken(0.3).toString()};
    font-size: 1.6rem;
    width: 25px;
    height: 25px;

    &:focus-visible {
        outline: 3px solid ${({theme}) => theme.colors.secondary};
    }

    &:disabled {
        opacity: 0.2;
    }
`;

export const Image = styled.img`
    display: inline-block;
    vertical-align: middle;
    width: 15%;
    height: auto;
    margin-right: 3%;
    object-fit: cover;
    aspect-ratio: 3 / 4;
    border-radius: 2px;
`;
