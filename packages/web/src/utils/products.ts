import { client } from './api-client';

function getProducts() {
  return client('products');
}

function getProductById(id: string) {
  return client(`products/${id}`);
}

export { getProducts, getProductById };
