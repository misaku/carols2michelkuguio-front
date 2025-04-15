import styled, {keyframes} from 'styled-components'
import {device} from "../../App.theme.ts";

const slideToUp = keyframes`
  from {
    transform: translateY(30%) ;
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideToDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CountdownSection = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    .number {
        font-size: 4.5rem;
        font-weight: 300;
        color: white;
        text-transform: uppercase;
    }

    .text {
        font-size: 1rem;
        color: white;
        margin-top: 5px;
        text-transform: uppercase;
    }
`;

export const Divider = styled.div`
    display: flex;
    text-align: center;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
    height: 100%;
    width: 0.1rem;
    border-radius: 100%;
    
`;


export const CountdownWrapper = styled.div`
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    color: white;
    text-align: center;
    padding: 10px;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 12rem;
    animation: ${slideToUp} 1.5s ease-in-out forwards;
    @media ${device.mobile} {
    
        gap: 1.5rem
    
        }
`;

export const Title = styled.h2`
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    color: #fff;
    font-size: 2rem;
    height: 2rem;
    line-height: 2rem;
    z-index: 1;
    animation: ${slideToDown} 1.5s ease-in-out forwards;
`
