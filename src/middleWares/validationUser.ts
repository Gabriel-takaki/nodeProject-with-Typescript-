import { NextFunction, Request, Response } from 'express';
import { InputUser } from '../interfaces/user.interface';

export default class VerifyUser {
  public usernameVerify =
  (req: Request, res: Response, next: NextFunction): Response | undefined => {
    const { username }: InputUser = req.body;
    if (!username) return res.status(400).json({ error: 'Username is required' });
    if (typeof username !== 'string') {
      return res.status(422).json({ error: 'Username must be a string' });
    }
    if (username.length <= 2) {
      return res.status(422).json({ error: 'Username must be longer than 2 characters' });
    }
    next();
  };

  public classeVerify = (req: Request, res: Response, next: NextFunction): Response | undefined => {
    const { classe }: InputUser = req.body;
    if (!classe) return res.status(400).json({ error: 'Classe is required' });
    if (typeof classe !== 'string') {
      return res.status(422).json({ error: 'Classe must be a string' });
    }
    if (classe.length <= 2) {
      return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
    }
    next();
  };

  public levelVerify = (req: Request, res: Response, next: NextFunction): Response | undefined => {
    const { level }: InputUser = req.body;
    if (level === undefined) return res.status(400).json({ error: 'Level is required' });
    if (typeof level !== 'number') {
      return res.status(422).json({ error: 'Level must be a number' });
    }
    console.log(level);
    if (level <= 0) {
      return res.status(422).json({ error: 'Level must be greater than 0' });
    }
    next();
  };

  public passwordVerify =
  (req: Request, res: Response, next: NextFunction): Response | undefined => {
    const { password }: InputUser = req.body;
    if (!password) return res.status(400).json({ error: 'Password is required' });
    if (typeof password !== 'string') {
      return res.status(422).json({ error: 'Password must be a string' });
    }
    if (password.length <= 7) {
      return res.status(422).json({ error: 'Password must be longer than 7 characters' });
    }
    next();
  };
}
