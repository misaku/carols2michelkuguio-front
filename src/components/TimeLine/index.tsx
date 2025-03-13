import styled from "styled-components";

import noiva from '../../assets/noiva.jpg'
import inicio from '../../assets/inicio.jpg'
const LabelDate = styled.span`
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
`
const Content = styled.div`
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
    h3{
        color: #a8735e;
        font-weight: 500;
        font-size: 3rem;
        margin-bottom: 1rem;
        width: 100%;
        text-align: left;
        text-transform: uppercase;
    }
`
const Container = styled.section`
    display: flex;
    position: relative;
    flex-direction: row;
    margin: 0;
    ${Content}:first-child {
        border-right: 1px solid #f0f0f0;
        border-left: none;
        padding-left: 50px;
        padding-right: 100px;
    }

    &&:nth-child(2n) {
        flex-direction: row-reverse;

        ${Content}:first-child {
            border-right: none;
            border-left: 1px solid #f0f0f0;
            padding-left: 100px;
            padding-right: 50px;
        }

        ${Content}:nth-child(2) {
            padding-left: 50px;
            padding-right: 100px;
        }
    }
`

const Image = styled.img`
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
`

export function TimeLine(){
    return (<>
        <Wrapper>
        <Container>
            <Content>
                <h3>tasdtay</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales dui ut sem tincidunt, eget suscipit est posuere. Nam placerat lectus tortor, nec dapibus ex blandit eget.</p>
                </Content>
            <Content>
                <Image src={inicio} />
            </Content>
            <LabelDate><span>01/01</span><span>2024</span></LabelDate>
        </Container>
            <Container>
                <Content>
                    <h3>tasdtay</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales dui ut sem tincidunt, eget suscipit est posuere. Nam placerat lectus tortor, nec dapibus ex blandit eget.</p>

                </Content>
                <Content>
                    <Image src={noiva} />
                </Content>
                <LabelDate><span>01/01</span><span>2024</span></LabelDate>
            </Container>
        </Wrapper>
    </>)
}
export default TimeLine;