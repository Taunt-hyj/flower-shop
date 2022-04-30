import { AddressItem } from '@/types';

export const removeAddressItemToAddress = (
    addressItems: AddressItem[],
    addressItemToRemove: AddressItem
): AddressItem[] => {
    return addressItems.filter((addressItem) => addressItem._id !== addressItemToRemove._id);
};

export const addAddressItemToAddress = (
    addressItems: AddressItem[],
    addressItemToAdd: AddressItem
): AddressItem[] => {
    return [addressItemToAdd, ...addressItems];
};

export const updateAddressItemQuantityToAddress = (
    addressItems: AddressItem[],
    addressItemToUpdate: AddressItem
): AddressItem[] => {

    return addressItems.map((addressItem) =>
        addressItem._id === addressItemToUpdate.addressItem._id
            ? addressItemToUpdate.addressItem : addressItem
    );
};
