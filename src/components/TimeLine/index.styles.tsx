import styled, {css} from "styled-components";

import {device} from "../../App.theme.ts";

export const LabelDate = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    height: 70px;
    width: 70px;
    aspect-ratio: 1;
    background: #ae8472;
    color: #fff;
    position: absolute;
    left: 50%;
    margin-left: -35px;
    top: 50%;
    margin-top: -35px;
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 12px;
    line-height: 12px;
    @media ${device.tablet} {
        position: relative;
        align-self: flex-end;
        margin: auto !important;
        top: auto;
        left: auto;
        right: 0;
        &:after{
            content: "";
            width: calc(((100vw - 65px)/2) - 20px);
            display: block;
            height: 1px;
            background: #f0f0f0;
            position: absolute;
            left: calc(100% + 20px);
        }
    }
    @media ${device.mobile} {

    }
`
export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 100px;
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    color: #9f9693;
    text-align: justify;
    @media ${device.tablet} {
        padding-left: 30px;
        padding-right: 30px;
        text-align: right;
        &:nth-child(2) {
            padding-bottom: 0px;
        }
    }
    h3 {
        color: #a8735e;
        font-weight: 500;
        font-size: 3rem;
        margin-bottom: 1rem;
        width: 100%;
        text-align: left;
        text-transform: uppercase;
        @media ${device.tablet} {
            text-align: right;  
        }
    }
`
interface ContainerProps {
    isEven?: boolean;
}
export const Container = styled.section<ContainerProps>`
    display: flex;
    position: relative;
    flex-direction: row;
    margin: 0;

    ${Content}:first-child {
        border-right: 1px solid #f0f0f0;
        border-left: none;
        padding-left: 50px;
        padding-right: 100px;
        @media ${device.tablet} {
            padding-left: 30px;
            padding-right: 30px;
            border: none;
        }
    }
    ${({isEven}) => (isEven && css`
        flex-direction: row-reverse;
        @media ${device.tablet} {
            flex-direction: column-reverse;
        }

        ${Content}:first-child {
          
            border-right: none;
            border-left: 1px solid #f0f0f0;
            padding-left: 100px;
            padding-right: 50px;
            @media ${device.tablet} {
                border: none;
                border-left: none;
                padding-left: 30px;
                padding-right: 30px;

            }
        }

        ${Content}:nth-child(2) {
            padding-left: 50px;
            padding-right: 100px;
            @media ${device.tablet} {
                padding-left: 30px;
                padding-right: 30px;
                border: none;
            }
        }
    `)}
    @media ${device.tablet} {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #f0f0f0;
        margin-right: 50px;
    }
`

export const Image = styled.img`
    object-fit: cover;
    aspect-ratio: 16 / 9;
    width: 100%;
    object-position: center center;
    border-radius: 5px;

`
export const Wrapper = styled.div`
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
        // @media ${device.desktop} {
    // background-color: #f00;
    // }
        // @media ${device.laptop} {
    //     background-color: #f1a447;
    // }
    @media ${device.tablet} {
        max-width: 100vw;
        //background-color: #1050f1;
    }
        // @media ${device.mobile} {
    //     background-color: #b700ff;
    // }
`

