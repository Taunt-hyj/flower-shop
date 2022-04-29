import { Product } from './Product';

interface OrderProduct {
    quantity: number;
    product: Product;
}
export type Order = {
    _id: string;
    total: number;
    items: OrderProduct[];
    state: string;
    createdAt: Date;
};