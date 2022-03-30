import { Request, Response, Router } from 'express';
import OrderController from '../controllers/orderController';

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get(
  '/',
  async (req: Request, res: Response) => orderController.getAllOrders(req, res),
);

export default orderRouter;