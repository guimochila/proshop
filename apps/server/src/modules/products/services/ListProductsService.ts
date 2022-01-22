import { getCustomRepository } from 'typeorm'
import Product from '../typeorm/entities/Product'
import { ProductRepository } from '../typeorm/repositories/ProductRepository'

class ListProductsService {
  public async execute(): Promise<Product[]> {
    const productRepo = getCustomRepository(ProductRepository)

    const products = await productRepo.find()

    return products
  }
}

export default ListProductsService
