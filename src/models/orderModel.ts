import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [allOrders] = await this.connection.execute<RowDataPacket[]>(
      `SELECT Trybesmith.Orders.userId, Trybesmith.Products.id AS productId , 
      Trybesmith.Orders.id FROM Trybesmith.Orders
      JOIN Trybesmith.Products 
      ON Trybesmith.Products.orderId = Trybesmith.Orders.id
        `,
    );
// requisito 4 com ajuda do isaac na monitoria de isaac
    return allOrders as Order[];
  }
}