import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';

interface Props {
    type: 'login' | 'signUp';
}

const AuthLink = ({ type }: Props) => {
    const navigation = useNavigation();

    const handleNavigate = () => {
        const route =
            type === 'login'
                ? navigationNames.signUpScreen
                : navigationNames.loginScreen;
        navigation.navigate(route);
    };

    const link =
        type === 'login' ? (
            <TouchableOpacity style={styles.linkContainer} onPress={handleNavigate}>
                <Text> 没有账户? </Text>
                <Text> 去注册。</Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={styles.linkContainer} onPress={handleNavigate}>
                <Text> 已经拥有账户? </Text>
                <Text> 去登陆。</Text>
            </TouchableOpacity>
        );

    return <View style={styles.container}>{link}</View>;
};

export default AuthLink;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    linkContainer: {
        flexDirection: 'row',
    },
});
