import { KeyboardEvent } from 'react';

import formatPrice from '../../../utils/formatPrice';
import { IProduct } from '../../../models';

import { useCart } from '../../../contexts/cart-context';

import * as S from './style';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { openCart, addProduct } = useCart();
  const {
nome, preco, imagem
  } = product;

  const formattedPrice = formatPrice(preco, 'BRL');


  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
    openCart();
  };

  const handleAddProductWhenEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Space') {
      addProduct({ ...product, quantity: 1 });
      openCart();
    }
  };

  return (
    <S.Container onKeyUp={handleAddProductWhenEnter} sku={imagem} tabIndex={1}>
      <S.Image alt={nome} />
      <S.Title>{nome}</S.Title>
      <S.Price>
        <S.Val>
          <small>R$</small>
          <b>{formattedPrice.substring(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substring(formattedPrice.length - 3)}</span>
        </S.Val>
      </S.Price>
      <S.BuyButton onClick={handleAddProduct} tabIndex={-1}>
        Adicionar ao carrinho
      </S.BuyButton>
    </S.Container>
  );
};

export default Product;
