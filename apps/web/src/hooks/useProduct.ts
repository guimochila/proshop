import { useQuery } from 'react-query'
import { ProductItem } from '../components/Product'
import { getProductById } from '../utils/products'

function useProduct(productId: string) {
  return useQuery<ProductItem>(['products', productId], () =>
    getProductById(productId),
  )
}

export default useProduct
