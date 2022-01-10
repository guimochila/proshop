import { getCustomRepository } from 'typeorm'
import AppError from '@shared/errors/AppError'
import { ProductRepository } from '../typeorm/repositories/ProductRepository'

interface IRequest {
  id: string
}

class ShowProductService {
  public async execute({ id }: IRequest) {
    const productRepo = getCustomRepository(ProductRepository)
    const product = await productRepo.findOne(id)

    if (!product) {
      throw new AppError('Product not found', 404)
    }

    return product
  }
}

export default ShowProductService
