import { useCart } from '@/contexts';
import React from 'react';
import { FlatList } from 'react-native';

import CartItem from './CartItem';

const CartList: React.FC = () => {
    const { cartItems } = useCart();

    return (
        <FlatList
            data={cartItems}
            renderItem={(item) => <CartItem cartItem={item.item} />}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default CartList;
