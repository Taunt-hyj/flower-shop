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

interface Props {
    order: Order;
}

const OrderItem = ({ order }: Props) => {
    const navigation = useNavigation();
    const { showToast } = useToast();

    const formattedDate = formatDate(order.createdAt);
    const renderOrderProducts = () => {
        return order.items.map((order) => (
            <TouchableOpacity
                style={styles.productInfo}
                key={order.product._id}
                onPress={() =>
                    navigation.navigate(navigationNames.productScreen, {
                        id: order.product._id,
                    })
                }
            >
                <View style={{ paddingVertical: 5, paddingHorizontal: 15 }} >
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

    const callPhone = (phone) => {
        const tel = `tel:${phone}`;
        Alert.alert('联系方式', phone, [
            { text: '取消' },
            {
                text: '确定',
                onPress: () => {
                    Linking.canOpenURL(tel).then((supported) => {
                        if (!supported) showToast('error', `您的设备不支持该功能，请手动拨打 ${phone}`)
                        else return Linking.openURL(tel)
                    }).catch(error => showToast('error', error))
                }
            }])
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
                            onPress={() => callPhone('13456789876')}
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