import formatPrice from '../../../../utils/formatPrice';
import {ICartProduct} from '../../../../models';

import {useCart} from '../../../../contexts/cart-context';

import * as S from './style';

interface IProps {
    product: ICartProduct;
}

const CartProduct = ({product}: IProps) => {
    const {removeProduct, increaseProductQuantity, decreaseProductQuantity} =
        useCart();
    const {
        imagem,
        categoria, nome, preco,
        quantity,
    } = product;

    const handleRemoveProduct = () => removeProduct(product);
    const handleIncreaseProductQuantity = () => increaseProductQuantity(product);
    const handleDecreaseProductQuantity = () => decreaseProductQuantity(product);

    return (
        <S.Container>
            <S.DeleteButton
                onClick={handleRemoveProduct}
                title="Remover produto do carrinho"
            >X</S.DeleteButton>
            <S.Image
                src={`static/products/${imagem}`}
                alt={nome}
            />
            <S.Details>
                <S.Title>{nome}</S.Title>
                <S.Desc>
                    {`${categoria}`} <br/>
                    Quantity: {quantity}
                </S.Desc>
            </S.Details>
            <S.Price>
                <p>{`R$  ${formatPrice(preco, 'BRL')}`}</p>
                <div>
                    <S.ChangeQuantity
                        onClick={handleDecreaseProductQuantity}
                        disabled={quantity === 1 ? true : false}
                    >
                        -
                    </S.ChangeQuantity>
                    <S.ChangeQuantity onClick={handleIncreaseProductQuantity}>
                        +
                    </S.ChangeQuantity>
                </div>
            </S.Price>
        </S.Container>
    );
};

export default CartProduct;
