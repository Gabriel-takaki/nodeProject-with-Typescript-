import jwt from 'jsonwebtoken';
import { InputUser } from '../interfaces/user.interface';

const config = { expiresIn: '1d' };

const SECRET = 'paodequeijo';

export default (data: InputUser) => jwt.sign({ data }, SECRET, config);