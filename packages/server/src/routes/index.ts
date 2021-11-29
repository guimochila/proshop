import express from 'express';
import { getProductsRoutes } from './products';

function getRoutes() {
  // create a router for all the routes for the app
  const router = express.Router();

  router.use('/products', getProductsRoutes());

  return router;
}

export { getRoutes };
