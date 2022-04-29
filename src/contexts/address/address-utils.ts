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
    const isItemExist = addressItems.some(
        (addressItem) => addressItem._id === addressItemToAdd._id
    );
    if (isItemExist) {
        return addressItems.map((addressItem) =>
            addressItem._id === addressItemToAdd._id
                ? { ...addressItem, quantity: addressItem.quantity + 1 }
                : addressItem
        );
    }

    return [addressItemToAdd, ...addressItems];
};

export const updateAddressItemQuantityToAddress = (
    addressItems: AddressItem[],
    addressItemToUpdate: AddressItem,
    newQuantity: number
): AddressItem[] => {
    return addressItems.map((addressItem) =>
        addressItem._id === addressItemToUpdate._id
            ? { ...addressItem, quantity: newQuantity }
            : addressItem
    );
};
