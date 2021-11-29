import express, { Response, Request } from 'express';
// @ts-ignore: Unreachable code error
import products from '../../data/products.js';

function getProductsRoutes() {
  const router = express.Router();

  router.get('/', getProducts);
  router.get('/:id', getProductById);

  return router;
}

function getProducts(req: Request, res: Response) {
  res.json(products);
}

function getProductById(req: Request, res: Response) {
  const product = products.find((p: any) => p._id === req.params.id);

  res.json(product);
}

export { getProductsRoutes };
