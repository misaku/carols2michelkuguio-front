import formatPrice from '../../utils/formatPrice';
import CartProducts from './CartProducts';

import { useCart } from '../../contexts/cart-context';

import * as S from './style';
import {useNavigate} from "react-router";

const Cart = () => {
  const { products, total, isOpen, openCart, closeCart } = useCart();
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (total.productQuantity) {
      navigate(`/checkout`)
    } else {
      alert('Adicione produtos ao carrinho!');
    }
  };

  const handleToggleCart = (isOpen: boolean) => () =>
    isOpen ? closeCart() : openCart();

  return (
    <S.Container isOpen={isOpen}>
      <S.CartButton onClick={handleToggleCart(isOpen)}>
        {isOpen ? (
          <span>X</span>
        ) : (
          <S.CartIcon>
            <S.CartQuantity title="Quantidade de produtos no carrinho">
              {total.productQuantity}
            </S.CartQuantity>
          </S.CartIcon>
        )}
      </S.CartButton>

      {isOpen && (
        <S.CartContent>
          <S.CartContentHeader>
            <S.CartIcon large>
              <S.CartQuantity>{total.productQuantity}</S.CartQuantity>
            </S.CartIcon>
            <S.HeaderTitle>Carrinho</S.HeaderTitle>
          </S.CartContentHeader>

          <CartProducts products={products} />

          <S.CartFooter>
            <S.Sub>TOTAL</S.Sub>
            <S.SubPrice>
              <S.SubPriceValue>{`${total.currencyFormat} ${formatPrice(
                total.totalPrice,
                'BRL'
              )}`}</S.SubPriceValue>
            </S.SubPrice>
            <S.CheckoutButton onClick={handleCheckout} autoFocus>
              Finalizar
            </S.CheckoutButton>
          </S.CartFooter>
        </S.CartContent>
      )}
    </S.Container>
  );
};

export default Cart;
