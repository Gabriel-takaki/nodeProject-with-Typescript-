import { Request, Response, Router } from 'express';
import UserController from '../controllers/userController';
// import Verify from '../middleWares/validationProduct';

const userRouter = Router();
const userController = new UserController();
// const verify = new Verify();

userRouter.post(
  '/', 
  async (req: Request, res: Response) => userController.createUser(req, res),
);

export default userRouter;