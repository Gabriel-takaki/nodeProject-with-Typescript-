import { Request, Response } from 'express';
import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import Order, { OrderSend } from '../interfaces/order.interface';

export default class OrderController {
  private orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public estrutureArray = (obj:Order) => ({
    id: obj.id,
    userId: obj.userId,
    products: [obj.productId],
  });

  public async getAllOrders(_req: Request, res: Response): Promise<Response> {
    const allProducts:Order[] = await this.orderModel.getAll();
    console.log(allProducts);
    const newArray:OrderSend[] = allProducts.map((obj) => (this.estrutureArray(obj)));
    console.log(newArray);
    
    return res.status(200).json(newArray);
  }
}
// fazendo tudo no controller sem service