export interface AddressItem {
    _id: string;
    address: string;
    name: string;
    phone: string
}

export interface Address {
    items: AddressItem[];
}
