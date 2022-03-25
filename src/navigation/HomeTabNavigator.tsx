import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
    HomeScreen,
    CartScreen,
    ProfileScreen
} from '@/screens';
import { colors } from '@/theme';
import navigationNames from './navigationNames';
import { tabScreenOptions } from './NavigationHelper';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={navigationNames.homeScreen}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const CartStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={navigationNames.cartScreen}
                component={CartScreen}
                options={{
                    title: '购物车'
                }}
            />
        </Stack.Navigator>
    );
};

const ProfileStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={navigationNames.profileScreen}
                component={ProfileScreen}
                options={{
                    title: '用户'
                }}
            />
        </Stack.Navigator>
    );
};

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={tabScreenOptions}
            tabBarOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: colors.dark,
            }}
        >
            <Tab.Screen
                name={navigationNames.homeTab}
                component={HomeStackScreen}
            />
            <Tab.Screen
                name={navigationNames.cartTab}
                component={CartStackScreen}

            />
            <Tab.Screen
                name={navigationNames.profileTab}
                component={ProfileStackScreen}
            />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;