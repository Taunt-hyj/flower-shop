import apiClient from '@/utils/apiClient';
import catchError from '@/utils/catchError';
import { Order } from '@/types/Order'
const addOrderItem = async (): Promise<Order> => {
    try {
        const { data } = await apiClient.post('/checkout');
        return data.data;
    } catch (error) {
        throw new Error(catchError(error));
    }
};


const updateOrderItem = async (
    orderId: string
): Promise<Order> => {
    try {
        const { data } = await apiClient.put('/checkout', { orderId });
        return data.data;
    } catch (error) {
        throw new Error(catchError(error));
    }
};

export const CheckoutService = {
    addOrderItem,
    updateOrderItem,
};
