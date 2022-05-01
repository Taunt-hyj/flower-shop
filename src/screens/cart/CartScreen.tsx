import { useCart, useAuth } from '@/contexts';
import navigationNames from '@/navigation/navigationNames';
import { colors } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from '@/components/ui';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CartList, CartSubTotal } from '@/components/cart';

const CartScreen = () => {
    const { isAuthenticated } = useAuth();
    const navigation = useNavigation();
    const { cartItems } = useCart();

    if (!isAuthenticated) {
        return (
            <View style={styles.emptycontainer}>
                <Text style={styles.emptyText}> 请登陆后查看~   :( </Text>
                <Button
                    title="请登录"
                    type="primary"
                    style={styles.btn}
                    onPress={() => navigation.navigate(navigationNames.rootAuthScreen)}
                />
            </View>
        );
    }

    if (cartItems.length === 0) {
        return (
            <View style={styles.emptycontainer}>
                <Text style={styles.emptyText}> 你的购物车还是空的哦~   :( </Text>
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
            <View style={styles.titleView}>
                <Text style={styles.title}>购物车</Text>
            </View>
            <View style={styles.cartList}>
                <CartList />
            </View>
            <View style={styles.bottomContainer}>
                <CartSubTotal />
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(navigationNames.checkoutScreen)}>
                    <Text style={styles.subtext}> 购买 </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: colors.lighterGray,
    },
    titleView: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    cartList: {
        flex: 4,
        paddingHorizontal: 10,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.orgin,
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginVertical: 5,
        borderColor: colors.lighterGray,
        borderRadius: 50,
    },
    subtext: {
        fontWeight: '700',
        color: colors.white,
        fontSize: 17,
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
