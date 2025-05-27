import styled from 'styled-components';
import cartIcon from '../../static/cart-icon.png'
import color from "color";
export const CartButton = styled.button`
  border: 0;
  padding: 0;
  width: 60px;
  height: 60px;
  color: #ececec;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  line-height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 2;
  font-size: 1.6rem;
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    filter: brightness(85%);
  }
`;

interface IContainer {
  isOpen: boolean;
}
export const Container = styled.div<IContainer>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  z-index: 999;
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
  transition: right 0.2s;

  ${CartButton} {
    left: ${({ isOpen }) => (isOpen ? '0' : '-60px')};
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.black : theme.colors.primary};
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 450px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-450px')};

    ${CartButton} {
      left: -60px;
    }
  }
`;

interface ICartIcon {
  large?: boolean;
}
export const CartIcon = styled.div<ICartIcon>`
  width: ${({ large }) => (large ? '60px' : '50px')};
  height: ${({ large }) => (large ? '60px' : '50px')};
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  background-image: url(${cartIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  background-size: 50%;
`;

export const CartQuantity = styled.div`
  display: inline-block;
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
  width: 18px;
  height: 18px;
  color: ${({ theme }) => color(theme.colors.primary).darken(0.3).toString()};
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  bottom: 0;
  right: 5px;
`;

export const CartContent = styled.div`
  height: 100%;
  overflow-y: scroll;
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
  /* MAC scrollbar para desktop*/
  @media screen and (min-width: 640px) {
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color:${({ theme }) => color(theme.colors.primary).darken(0.3).toString()};
    }
  }
`;

export const CartContentHeader = styled.div`
  color: #ececec;
  box-sizing: border-box;
  text-align: center;
  padding: 45px 0;
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
`;

export const HeaderTitle = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  vertical-align: middle;
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
`;

export const Sub = styled.p`
  width: 20%;
  color: ${({ theme }) => color(theme.colors.secondary).lighten(0.3).toString()};;
  vertical-align: middle;
  display: inline-block;
  font-size: 1.6rem;
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
`;

export const SubPrice = styled.div`
  width: 80%;
  text-align: right;
  color: ${({ theme }) => color(theme.colors.primary).darken(0.7).toString()};;
  vertical-align: middle;
  display: inline-block;
  font-size: 1.3rem;
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
`;

export const SubPriceValue = styled.p`
  color: ${({ theme }) => color(theme.colors.secondary).lighten(0.1).toString()};
  font-size: 2.6rem;
  margin: 0;
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
`;

export const SubPriceInstallment = styled.p`
  margin: 0;
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  border: 0;
  color: #ececec;
  text-transform: uppercase;
  background-color: ${({ theme }) => color(theme.colors.primary).darken(0.3).toString()};;
  text-align: center;
  padding: 15px 0;
  margin-top: 40px;
  cursor: pointer;
  outline: none;
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
  
  transition: background-color 0.2s;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    background-color: ${({ theme }) => color(theme.colors.primary).darken(0.6).toString()};;
  }
`;

export const CartFooter = styled.div`
  box-sizing: border-box;
  padding: 5%;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: Montserrat, "Open Sans", Raleway, sans-serif;
  &::before {
    content: '';
    width: 100%;
    height: 20px;
    display: block;
    position: absolute;
    top: -20px;
    left: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  }
`;
