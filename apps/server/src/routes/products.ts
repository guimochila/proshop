import express, { Response, Request } from 'express'

import Product from '../models/Product'
import { catchErrors } from '../utils/errorHandler'

function getProductsRoutes() {
  const router = express.Router()

  router.get('/', catchErrors(getProducts))
  router.get('/:id', catchErrors(getProductById))

  return router
}

/* Controllers */

async function getProducts(req: Request, res: Response) {
  const products = await Product.find({})

  if (!products) {
    res.status(404)
    throw new Error('Products not found')
  }

  res.json(
    products.reduce(
      (obj, item) => Object.assign(obj, { [item._id]: item }),
      {},
    ),
  )
}

async function getProductById(req: Request, res: Response) {
  const product = await Product.findById(req.params.id)

  if (!product) {
    res.status(404)
    throw new Error('Product not found')
  }

  res.json(product)
}

export { getProductsRoutes }
