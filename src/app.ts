import express from 'express';
import productRouter from './routes/productsRouter';
import userRouter from './routes/userRouter';
import orderRouter from './routes/orderRouter';

const app = express();

app.use(express.json());

app.use('/orders', orderRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
export default app;
