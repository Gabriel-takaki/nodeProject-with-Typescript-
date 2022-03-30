import { Request, Response } from 'express';
import { InputUser } from '../interfaces/user.interface';
// import Product from '../interfaces/product.interface';
import connection from '../models/connection';
import UserModel from '../models/userModel';
// import JWT from 'jsonwebtoken';
import jwtTokenGenerator from '../helpers/jwtTokenGenerator';

export default class UserController {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    const { username, classe, level, password } = req.body; 
    const newUser: InputUser = await this.userModel.create({ username, classe, level, password });
    const newToken = jwtTokenGenerator(newUser);
    console.log(newToken);
    
    // const generateToken: InputUser = { id: username.id, username };

    return res.status(201).json({ token: newToken });
  }
}