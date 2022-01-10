import AppError from '@shared/errors/AppError'
import { getCustomRepository } from 'typeorm'
import { ProductRepository } from '../typeorm/repositories/ProductRepository'

interface IRequest {
  name: string
  price: number
  quantity: number
  image: string
  brand: string
  description: string
  num_reviews: number
  rating: number
}

class CreateProductService {
  public async execute({
    name,
    price,
    quantity,
    image,
    brand,
    description,
    num_reviews,
    rating,
  }: IRequest) {
    const productsRepository = getCustomRepository(ProductRepository)
    const productExists = await productsRepository.findByName(name)

    if (productExists) {
      throw new AppError(
        'There is already a product registered with the same name.',
      )
    }

    const product = productsRepository.create({
      name,
      price,
      quantity,
      image,
      brand,
      description,
      num_reviews,
      rating,
    })

    await productsRepository.save(product)

    return product
  }
}

export default CreateProductService
