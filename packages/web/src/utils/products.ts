import { client } from './api-client';

function fetchProducts() {
  return client('products');
}

function getProductById(id: string) {
  return client(`products/${id}`);
}

export { fetchProducts, getProductById };
