import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import AdressItem from './AdressItem';

const adressItems = [
    {
        _id: 1,
        address: '123124141',
        name: '123',
        phone: '1214124124'
    },
    {
        _id: 2,
        address: '123124141',
        name: '123',
        phone: '1214124124'
    }
];


const CartList: React.FC = () => {

    return (
        <View style={styles.container}>
            <FlatList
                data={adressItems}
                renderItem={(item) => <AdressItem addressItem={item.item} />}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CartList;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
    },
});
