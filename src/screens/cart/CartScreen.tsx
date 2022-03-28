import { useAuth } from '@/contexts';
import navigationNames from '@/navigation/navigationNames';
import { colors } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const cartItems = [];

const CartScreen = () => {
    const { isAuthenticated } = useAuth();
    const navigation = useNavigation();

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

        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
