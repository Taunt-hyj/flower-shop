import navigationNames from '@/navigation/navigationNames';
import { colors } from '@/theme';
import { Order } from '@/types';
import formatPrice from '@/utils/formatPrice';
import { formatDate } from '@/utils/helpers';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../ui';
import React from 'react';
import { Alert, Linking, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useToast } from '@/contexts';
import { useActionSheet } from '@expo/react-native-action-sheet';

interface Props {
    order: Order;
}

const OrderItem = ({ order }: Props) => {
    const navigation = useNavigation();
    const { showToast } = useToast();
    const { showActionSheetWithOptions } = useActionSheet();

    const formattedDate = formatDate(order.createdAt);
    const renderOrderProducts = () => {
        return order.items.map((order) => (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.productInfo}
                key={order.product._id}
                onPress={() =>
                    navigation.navigate(navigationNames.productScreen, {
                        id: order.product._id,
                    })
                }
            >
                <View style={{ paddingHorizontal: 15 }} >
                    <Image style={styles.image} source={{ uri: order.product.imageURL }} />
                </View>
                <View style={styles.main}>
                    <Text style={styles.name}>{order.product.name}</Text>
                    <Text style={styles.qty}>数量：{order.quantity}</Text>
                    <Text style={styles.qty}>实付：{formatPrice(order.product.price)}</Text>
                </View>
            </TouchableOpacity >
        ));
    };

    const cancelButtonIndex = 1;

    const callPhone = (phone) => {
        const tel = `tel:${phone}`;
        showActionSheetWithOptions(
            {
                title: '联系电话',
                options: [`骑手电话：${phone}`, '取消'],
                cancelButtonIndex,
                titleTextStyle: { fontSize: 13 },
                textStyle: { fontSize: 15 },
            },
            (buttonIndex) => {
                if (buttonIndex === 0)
                    Linking.canOpenURL(tel)
                        .then(() => Linking.openURL(tel))
                        .catch(error => showToast('error', error))
            }
        );
    }
    const renderButton = (order) => {
        switch (order.state) {
            case 'pay':
                return (
                    <View>
                        <Button
                            title='付款'
                            onPress={() => navigation.navigate(navigationNames.payScreen, { results: order })}
                            style={{ height: 24 }}
                            type={'default'}
                        />
                    </View>
                );
            case 'goods':
                return (
                    <View>
                        <Button
                            title='催单'
                            onPress={() => callPhone('15543216789')}
                            style={{ height: 24 }}
                            type={'default'}
                        />
                    </View>
                );
            case 'sale':
                return null;
            default:
                return null;
        }

    };

    return (
        <View style={styles.itemList}>
            <Text style={styles.date}> 下单时间: {formattedDate}</Text>
            <View style={{ marginVertical: 10, borderColor: colors.lightGray, borderWidth: 1 }} />
            <View>{renderOrderProducts()}</View>
            <View style={styles.down}>
                <Text>总价: ￥{order.total}</Text>
                {renderButton(order)}
            </View>
        </View >
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: colors.white,
        borderRadius: 20,
        margin: 5,
        padding: 15,
    },
    date: {
        color: colors.gray,
    },
    down: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    image: {
        width: 70,
        height: 70,
    },
    main: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    name: {
        fontSize: 15,
    },
    qty: {
        color: colors.gray,
        fontSize: 13,
    },
    productInfo: {
        paddingVertical: 10,
        flexDirection: 'row',
    },
    total: {
        color: colors.gray,
    },
});