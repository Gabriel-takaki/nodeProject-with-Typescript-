import { Pool, ResultSetHeader } from 'mysql2/promise';
import { InputUser } from '../interfaces/user.interface';
// import Product from '../interfaces/product.interface';

export default class UserModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async create({ username, classe, level, password }: InputUser): Promise <InputUser> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users ( username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: insertId, username, classe, level, password };
  }
} 