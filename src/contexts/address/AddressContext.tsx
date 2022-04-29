import { AddressService } from '@/services';
import { AddressItem, Product } from '@/types';
import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useMemo,
} from 'react';

import { useAuth } from '../auth';
import reducer from './address-reducer';
import {
    ADD_ADDRESS,
    CLEAR_ADDRESS,
    REMOVE_ADDRESS,
    SET_ADDRESS,
    UPDATE_QTY_ADDRESS,
    SET_ADDRESS_ERROR,
} from './address-types';

interface InitialStateType {
    addressItems: AddressItem[];
    loading: boolean;
    error: null | string;
    addAddressItem: (product: Product, quantity: number) => void;
    removeAddressItem: (addressItemToRemove: AddressItem) => void;
    clearAddress: () => void;
    updateAddressItemQty: (addressItem: AddressItem, newQuantity: number) => void;
}

export const AddressContext = createContext<InitialStateType>({
    addressItems: [],
    loading: true,
    error: null,
    addAddressItem: () => null,
    removeAddressItem: () => null,
    clearAddress: () => null,
    updateAddressItemQty: () => null,
});

export const AddressProvider: React.FC = ({ children }) => {
    const { isAuthenticated } = useAuth();

    const initialState = {
        addressItems: [],
        loading: true,
        error: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchAddresss = async () => {
        try {
            const results = await AddressService.getAddress();
            dispatch({ type: SET_ADDRESS, payload: results.items });
        } catch (error) {
            dispatch({ type: SET_ADDRESS_ERROR, payload: { error: error.message } });
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchAddresss();
        }
    }, [isAuthenticated]);

    const addAddressItem = async (product: Product, quantity: number) => {
        const results = await AddressService.addAddressItem(quantity, product._id);
        const addressItem: AddressItem = { _id: results._id, quantity, product };
        dispatch({ type: ADD_ADDRESS, payload: addressItem });
    };

    const removeAddressItem = async (addressItem: AddressItem) => {
        await AddressService.removeAddressItem(addressItem.product._id);
        dispatch({ type: REMOVE_ADDRESS, payload: addressItem });
    };

    const updateAddressItemQty = async (addressItem: AddressItem, newQuantity: number) => {
        await AddressService.updateQuantityCarItem(addressItem.product._id, newQuantity);
        dispatch({ type: UPDATE_QTY_ADDRESS, payload: { addressItem, newQuantity } });
    };

    const clearAddress = () => {
        dispatch({ type: CLEAR_ADDRESS });
    };

    const value = useMemo(
        () => ({
            ...state,
            addAddressItem,
            removeAddressItem,
            clearAddress,
            updateAddressItemQty,
        }),
        [state]
    );

    return <AddressContext.Provider value={value}>{children}</AddressContext.Provider>;
};

export const useAddress = () => useContext(AddressContext);
