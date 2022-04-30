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
    UPDATE_ADDRESS,
    SET_ADDRESS_ERROR,
} from './address-types';

interface InitialStateType {
    addressItems: AddressItem[];
    loading: boolean;
    error: null | string;
    addAddressItem: (address: string, name: string, phone: string) => void;
    removeAddressItem: (addressItemToRemove: AddressItem) => void;
    clearAddress: () => void;
    updateAddressItem: (addressId: string, address: string, name: string, phone: string) => void;
}

export const AddressContext = createContext<InitialStateType>({
    addressItems: [],
    loading: true,
    error: null,
    addAddressItem: () => null,
    removeAddressItem: () => null,
    clearAddress: () => null,
    updateAddressItem: () => null,
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

    const addAddressItem = async (address: string, name: string, phone: string) => {
        const results = await AddressService.addAddressItem(address, name, phone);
        const addressItem: AddressItem = results;
        dispatch({ type: ADD_ADDRESS, payload: addressItem });
    };

    const removeAddressItem = async (addressItem: AddressItem) => {
        console.log(addressItem)
        await AddressService.removeAddressItem(addressItem._id);
        dispatch({ type: REMOVE_ADDRESS, payload: addressItem });
    };

    const updateAddressItem = async (addressId: string, address: string, name: string, phone: string) => {
        const results = await AddressService.updateAddressItem(addressId, address, name, phone);
        const addressItem: AddressItem = results;
        dispatch({ type: UPDATE_ADDRESS, payload: { addressItem } });
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
            updateAddressItem,
        }),
        [state]
    );

    return <AddressContext.Provider value={value}>{children}</AddressContext.Provider>;
};

export const useAddress = () => useContext(AddressContext);
