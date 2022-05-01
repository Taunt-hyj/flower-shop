import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar, Button } from '@/components/ui';
import { useAuth, useToast, useCart, useAddress } from '@/contexts';
import { useNavigation } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';
import { colors } from '@/theme';
import { OrderCard } from '@/components/order';
import { MemberCard } from '@/components/member';

const ICON_SIZE = 20;

const menus = [
    {
        title: '编辑资料',
        to: navigationNames.editProfileScreen,
    },
    {
        title: '修改地址',
        to: navigationNames.addressScreen,
    },
    {
        title: '更改密码',
        to: navigationNames.changePasswordScreen,
    },
];

const ProfileScreen = () => {
    const navigation = useNavigation();
    const { logOut, isAuthenticated, currentUser } = useAuth();
    const { showToast } = useToast();
    const { clearCart } = useCart();

    const { clearAddress } = useAddress();

    const onLogOut = async () => {
        try {
            await logOut();
            clearCart();
            clearAddress();
            navigation.navigate(navigationNames.rootAuthScreen);
        } catch (error) {
            showToast('error', error.message);
        }
    };

    if (!isAuthenticated || !currentUser) {
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

    const menuListElement = menus.map((menu, i) => (
        <TouchableOpacity
            activeOpacity={0.8}
            key={`menu-${i}`}
            style={styles.menuList}
            onPress={() => navigation.navigate(menu.to)}
        >
            <Text style={styles.menuTitle}> {menu.title} </Text>
            <Ionicons name="ios-arrow-forward" size={ICON_SIZE} color="black" />
        </TouchableOpacity>
    ));

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.infoContainer}>
                    <Avatar user={currentUser} />
                    <Text style={styles.name}>{currentUser.name}</Text>
                </View>
                <OrderCard />
                <View style={{ paddingVertical: 10 }}>
                    <MemberCard />
                </View>
                <View style={styles.menu}>{menuListElement}</View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnLogOut} onPress={onLogOut}>
                    <Text style={styles.btnText}> 退出登录 </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 70,
        flex: 1,
    },
    infoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    name: {
        fontSize: 18,
        marginTop: 15,
    },
    menu: {
        backgroundColor: colors.white,
        borderRadius: 20,
    },
    menuList: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    menuTitle: {
        fontWeight: '600',
        fontSize: 16,
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
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex: 5,
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    btnLogOut: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
    },
    btnText: {
        color: colors.primary,
        fontWeight: '600',
        fontSize: 16,
    },
});
