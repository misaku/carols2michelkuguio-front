import {useCart} from "../../contexts/cart-context";


export const useCheckoutController = () => {
    const { products, total } = useCart();
    return {
        products, total
    }
}
