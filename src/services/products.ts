
import response from '../../public/static/json/products.json';

export const getProducts = async () => {
  const { products } = response.data || [];
  return products;
};
