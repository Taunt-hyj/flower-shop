import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useAddress } from '@/contexts';
import AddressItems from './AddressItems'

interface Props {
    choose: boolean;
}

const CartList: React.FC<Props> = (choose) => {
    const { addressItems } = useAddress();
    return (
        <View style={styles.container}>
            <FlatList
                data={addressItems}
                renderItem={(item) => <AddressItems addressItem={item.item} choose={choose} />}
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
