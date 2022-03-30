import { Pool, RowDataPacket } from 'mysql2/promise';
import { OrderSend } from '../interfaces/order.interface';

export default class OrderModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<OrderSend[]> {
    const [allOrders] = await this.connection.execute<RowDataPacket[]>(
      `SELECT Trybesmith.Orders.userId, 
      GROUP_CONCAT(Trybesmith.Products.id) AS productId , 
      Trybesmith.Orders.id FROM Trybesmith.Orders
      JOIN Trybesmith.Products 
      ON Trybesmith.Products.orderId = Trybesmith.Orders.id
      GROUP BY Trybesmith.Products.orderId
      ORDER BY Trybesmith.Orders.userId
        `,
    );

    const estrutureArray = allOrders.map((obj) => ({
      id: obj.id,
      userId: obj.userId,
      products: [JSON.parse(obj.productId)],
    }));
    // requisito 4 com ajuda do isaac na monitoria e do Raphael V
    return estrutureArray as unknown as OrderSend[];
  }
}