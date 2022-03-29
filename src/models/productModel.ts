import { Pool, RowDataPacket } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const [allProducts] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products;',
    );

    return allProducts as Product[];
  }
} 