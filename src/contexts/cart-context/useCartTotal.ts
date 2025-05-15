import { useCartContext } from './CartContextProvider';
import { ICartProduct } from '../../models';

const useCartTotal = () => {
  const { total, setTotal } = useCartContext();

  const updateCartTotal = (products: ICartProduct[]) => {
    const productQuantity = products.reduce(
      (sum: number, product: ICartProduct) => {
        sum += product.quantity;
        return sum;
      },
      0
    );

    const totalPrice = products.reduce((sum: number, product: ICartProduct) => {
      sum += product.preco * product.quantity;
      return sum;
    }, 0);


    const total = {
      productQuantity,
      totalPrice,
      currencyId: 'BRL',
      currencyFormat: 'R$',
    };

    setTotal(total);
  };

  return {
    total,
    updateCartTotal,
  };
};

export default useCartTotal;
