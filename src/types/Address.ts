export interface AddressItem {
    _id: string;
    address: string;
    name: string;
    phone: number
}

export interface Address {
    items: AddressItem[];
}
