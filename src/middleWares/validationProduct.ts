import { NextFunction, Request, Response } from 'express';
import Product from '../interfaces/product.interface';

export default class VerifyProduct {
  public nameVerify = (req: Request, res: Response, next: NextFunction): Response | undefined => {
    const { name }: Product = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    if (typeof name !== 'string') {
      return res.status(422).json({ error: 'Name must be a string' });
    }
    if (name.length <= 2) {
      return res.status(422).json({ error: 'Name must be longer than 2 characters' });
    }
    next();
  };

  public amountVerify = (req: Request, res: Response, next: NextFunction): Response | undefined => {
    const { amount }: Product = req.body;
    if (!amount) return res.status(400).json({ error: 'Amount is required' });
    if (typeof amount !== 'string') {
      return res.status(422).json({ error: 'Amount must be a string' });
    }
    if (amount.length <= 2) {
      return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
    }
    next();
  };
}

// forma de verificação feita na mão (sem joi) com ajuda do pull Request do Caio Lima tribo 15