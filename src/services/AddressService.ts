import { Address, AddressItem } from '@/types';
import apiClient from '@/utils/apiClient';
import catchError from '@/utils/catchError';

const getAddress = async (): Promise<Address> => {
    try {
        const { data } = await apiClient.get(`/address`);
        return data.data;
    } catch (error) {
        throw new Error(catchError(error));
    }
};

const addAddressItem = async (
    addressId: string, address: string, name: string, phone: string
): Promise<AddressItem> => {
    try {
        const url = `/address`;
        const payload = { addressId, address, name, phone };
        const { data } = await apiClient.post(url, payload);
        return data.data;
    } catch (error) {
        throw new Error(catchError(error));
    }
};

const removeAddressItem = async (addressId: string): Promise<void> => {
    try {
        return await apiClient.delete('/address', { data: { addressId } });
    } catch (error) {
        throw new Error(catchError(error));
    }
};

const updateAddressItem = async (
    addressId: string, address: string, name: string, phone: string
): Promise<void> => {
    try {
        return await apiClient.put('/address', { addressId, address, name, phone });
    } catch (error) {
        throw new Error(catchError(error));
    }
};

export const AddressService = {
    getAddress,
    addAddressItem,
    removeAddressItem,
    updateAddressItem,
};
