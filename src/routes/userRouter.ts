import { Request, Response, Router } from 'express';
import UserController from '../controllers/userController';
// import Verify from '../middleWares/validationProduct';
import VerifyUser from '../middleWares/validationUser';

const userRouter = Router();
const userController = new UserController();
const verify = new VerifyUser();

userRouter.post(
  '/', 
  verify.usernameVerify,
  verify.classeVerify,
  verify.levelVerify,
  verify.passwordVerify,
  async (req: Request, res: Response) => userController.createUser(req, res),
);

export default userRouter;