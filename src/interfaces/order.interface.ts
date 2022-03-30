export default interface Order {
  id: number;
  userId: number;
  productId: number;
} 

export interface OrderSend {
  id: number;
  userId: number;
  products: number[];
} 