import styled from 'styled-components';

export const PhotoWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 50vw;
        height: 50vh;
        object-fit: cover;
        border-radius: ${props => props.theme.measures.borderMaxRadius};
    }
`