import { Router } from 'express'
import ProductsController from '../controllers/ProductsController'

const productsRouter = Router()
const productsCtrl = new ProductsController()

productsRouter.get('/', productsCtrl.index)
productsRouter.get('/:id', productsCtrl.show)

export default productsRouter
