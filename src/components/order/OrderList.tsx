import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Order } from '@/types';
import OrderItem from './OrderItem';
import { useNavigation } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';
import { Button } from '@/components/ui';

interface Props {
    orders: Order[];
}

const OrderList = ({ orders }: Props) => {
    const navigation = useNavigation();

    if (orders.length === 0) {
        return (
            <View style={styles.emptycontainer}>
                <Text style={styles.emptyText}> 你的订单还是空的哦~   :( </Text>
                <Button
                    title="去购物"
                    type="primary"
                    style={styles.btn}
                    onPress={() => navigation.navigate(navigationNames.homeTab)}
                />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={(item) => <OrderItem order={item.item} />}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default OrderList;

const styles = StyleSheet.create({
    container: {
    },
    emptyText: {
        textAlign: 'center',
        padding: 30,
        fontSize: 16,
    },
    emptycontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: 150,
    },
});
