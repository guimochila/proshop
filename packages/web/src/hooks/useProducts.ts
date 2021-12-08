import { useQuery } from 'react-query';
import { ProductItem } from '../components/Product';
import { fetchProducts } from '../utils/products';

export interface ProductsResponse {
  [key: string]: ProductItem;
}

function useProducts() {
  return useQuery<ProductsResponse>('products', fetchProducts);
}

export default useProducts;
