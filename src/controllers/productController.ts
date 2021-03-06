import { Request, Response } from 'express';
import Product from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

export default class ProductController {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public async getAllProducts(_req: Request, res: Response): Promise<Response> {
    const allProducts: Product[] = await this.productModel.getAll();
    console.log(allProducts);
    return res.status(200).json(allProducts);
  }

  public async createProduct(req: Request, res: Response): Promise<Response> {
    const { name, amount } = req.body; 
    const newProduct: Product = await this.productModel.create({ name, amount });
    return res.status(201).json({ item: newProduct });
  }
}

// fazendo tudo no controller sem service