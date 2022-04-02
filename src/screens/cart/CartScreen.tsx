import { useCart, useAuth } from '@/contexts';
import navigationNames from '@/navigation/navigationNames';
import { colors } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
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
                    color={colors.orgin} title="去登录"
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
                    color={colors.orgin} title="去购物"
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
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.subtext}> 购买 </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: colors.lighterGray,
    },
    titleView: {
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    cartList: {
        flex: 4,
        paddingTop: 30,
        paddingHorizontal: 18,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.orgin,
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginVertical: 5,
        borderColor: colors.lightGray,
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
});
