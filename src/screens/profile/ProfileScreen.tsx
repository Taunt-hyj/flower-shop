import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from '@/components/ui';
import { useAuth, useToast, useCart } from '@/contexts';
import { useNavigation } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';
import { colors } from '@/theme';

const ICON_SIZE = 20;

const menus = [
    {
        title: '我的订单',
        to: navigationNames.editProfileScreen,
    },
    {
        title: '编辑资料',
        to: navigationNames.editProfileScreen,
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


    const onLogOut = async () => {
        try {
            await logOut();
            clearCart();
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
                    color={colors.orgin} title="去登录"
                    onPress={() => navigation.navigate(navigationNames.rootAuthScreen)}
                />
            </View>

        );
    }

    const menuListElement = menus.map((menu, i) => (
        <TouchableOpacity
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
                <View style={styles.menu}>{menuListElement}</View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.btnLogOut} onPress={onLogOut}>
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
        marginVertical: 10,
        marginTop: 40,
    },
    menuList: {
        paddingVertical: 15,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
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
