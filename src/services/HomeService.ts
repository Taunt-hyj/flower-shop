import { Product } from '@/types';
import apiClient from '@/utils/apiClient';
import catchError from '@/utils/catchError';

interface ProductsData {
    products: Product[];
    total: number;
}

const getHome = async (): Promise<ProductsData[]> => {
    try {
        const { data } = await apiClient.get(`/products`);
        return data.data;
    } catch (error) {
        throw new Error(catchError(error));
    }
};

export const HomeService = {
    getHome,
};