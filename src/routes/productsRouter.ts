import { Request, Response, Router } from 'express';
import ProductController from '../controllers/productController';
import VerifyProducts from '../middleWares/validationProduct';

const productRouter = Router();
const productController = new ProductController();
const verify = new VerifyProducts();

productRouter.get(
  '/',
  async (req: Request, res: Response) => productController.getAllProducts(req, res),
);

productRouter.post(
  '/', 
  verify.nameVerify,
  verify.amountVerify,
  async (req: Request, res: Response) => productController.createProduct(req, res),
);

export default productRouter;