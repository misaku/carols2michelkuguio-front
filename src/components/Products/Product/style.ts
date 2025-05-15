import styled from 'styled-components';

const getImage = (sku: string|number)=>{
  return `/static/products/${sku}`
}
export const BuyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border: 0;
  font-size: 1.6rem;
  transition: background-color 0.2s;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

interface IImage {
  alt: string;
}
export const Image = styled.div<IImage>`
margin-bottom: 10px;
`;

interface IContainer {
  sku: number | string;
}
export const Container = styled.div<IContainer>`
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  cursor: default;
  outline: none;
  border-radius: 5px;
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  ${Image} {
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    height: 270px;
    position: relative;
    background-image: ${({ sku }) =>
      `url(${getImage(sku)})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    ::before {
      content: '';
      display: block;
      position: absolute;
      background: #eee;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.tablet}) {
      height: 320px;
    }
  }

  &:hover {
    background-color: #f4f4f4;
    }

    ${BuyButton} {
      background-color: ${({ theme }) => theme.colors.secondary};
      
    }
  }
`;



export const Title = styled.p`
  position: relative;
  padding: 0 20px;
  height: 100px;
  font-size: 1.4rem;
  &::before {
    content: '';
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }
`;

export const Price = styled.div`
  height: 60px;
  margin: 10px 0px;
  font-size: 1.6rem;
  .val {
    b {
      font-size: 3.2rem;
      margin-left: 5px;
    }
  }
`;

export const Val = styled.p`
  margin: 0;
  b {
    font-size: 3.2rem;
    margin-left: 5px;
  }
`;
