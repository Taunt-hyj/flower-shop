import { Home } from '@/types';
import apiClient from '@/utils/apiClient';
import catchError from '@/utils/catchError';

const getHome = async (): Promise<Home[]> => {
    try {
        const { data } = await apiClient.get(`/home`);
        return data.data;
    } catch (error) {
        throw new Error(catchError(error));
    }
};

export const HomeService = {
    getHome,
};