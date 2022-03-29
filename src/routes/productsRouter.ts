import { Request, Response, Router } from 'express';
import ProductController from '../controllers/productController';

const productRouter = Router();
const productController = new ProductController();

productRouter.get(
  '/',
  async (req: Request, res: Response) => productController.getAllProducts(req, res),
);

export default productRouter;