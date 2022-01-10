import { Request, Response } from 'express'
import ListProductsService from '../services/ListProductsService'
import ShowProductService from '../services/ShowProductService'

class ProductsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listProducts = new ListProductsService()
    const products = await listProducts.execute()

    return res.json(products)
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const showProduct = new ShowProductService()
    const product = await showProduct.execute({ id })

    return res.json(product)
  }
}

export default ProductsController
