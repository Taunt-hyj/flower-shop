import { Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import React from 'react';
import { colors } from '@/theme';

import navigationNames from './navigationNames';

const getTabTitle = (routeName: string): string => {
    switch (routeName) {
        case navigationNames.homeTab:
            return '首页';
        case navigationNames.cartTab:
            return '购物车';
        case navigationNames.profileTab:
            return '用户';
        default:
            return '';
    }
};

export const tabScreenOptions: (props: {
    route: RouteProp<ParamListBase, keyof ParamListBase>;
    navigation: any;
}) => BottomTabNavigationOptions = ({ route }) => ({
    title: getTabTitle(route.name),
    tabBarShowLabel: false,
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.dark,
    tabBarIcon: ({ color, size }) => {
        let iconName = '';
        switch (route.name) {
            case navigationNames.homeTab:
                iconName = 'md-home-outline';
                break;
            case navigationNames.cartTab:
                iconName = 'md-cart-outline';
                break;
            case navigationNames.profileTab:
                iconName = 'md-person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
    },
});
