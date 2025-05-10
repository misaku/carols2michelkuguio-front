//import axios from 'axios';
import { IGetProductsResponse } from '../models';

import productsx from '../static/json/products.json';


export const getProducts = async () => {
  let response: IGetProductsResponse;

  // response = await axios.get(
  //     'https://react-shopping-cart-67954.firebaseio.com/products.json'
  // );
    response = productsx;


  const { products } = response.data || [];

  return products;
};
