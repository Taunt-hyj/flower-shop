import { AddressItem } from '@/types';

import {
    ADD_ADDRESS,
    REMOVE_ADDRESS,
    SET_ADDRESS,
    CLEAR_ADDRESS,
    UPDATE_QTY_ADDRESS,
    SET_ADDRESS_ERROR,
} from './address-types';

import {
    addAddressItemToAddress,
    removeAddressItemToAddress,
    updateAddressItemQuantityToAddress,
} from './address-utils';

type State = {
    addressItems: AddressItem[];
    loading: boolean;
    error: null | string;
};

type Action = {
    type: string;
    payload?: any;
};

export default (state: State, action: Action): State => {
    switch (action.type) {
        case CLEAR_ADDRESS:
            return { ...state, addressItems: [] };
        case SET_ADDRESS:
            return {
                ...state,
                addressItems: action.payload,
                loading: false,
                error: null,
            };
        case ADD_ADDRESS: {
            return {
                ...state,
                addressItems: addAddressItemToAddress(state.addressItems, action.payload),
            };
        }
        case REMOVE_ADDRESS: {
            return {
                ...state,
                addressItems: removeAddressItemToAddress(state.addressItems, action.payload),
            };
        }

        case UPDATE_QTY_ADDRESS: {
            return {
                ...state,
                addressItems: updateAddressItemQuantityToAddress(
                    state.addressItems,
                    action.payload.addressItem,
                    action.payload.newQuantity
                ),
            };
        }

        case SET_ADDRESS_ERROR: {
            return { ...state, error: action.payload.error, loading: false };
        }

        default:
            return state;
    }
};
