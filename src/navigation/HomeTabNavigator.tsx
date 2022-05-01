import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
    HomeScreen,
    CartScreen,
    ProfileScreen,
    ChangePasswordScreen,
    EditProfileScreen,
} from '@/screens';
import navigationNames from './navigationNames';
import { tabScreenOptions } from './NavigationHelper';
import { colors } from '@/theme';


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
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};


const ProfileStackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.lighterGray,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name={navigationNames.profileScreen}
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationNames.changePasswordScreen}
                component={ChangePasswordScreen}
                options={{ headerTitle: '更改密码' }}
            />
            <Stack.Screen
                name={navigationNames.editProfileScreen}
                component={EditProfileScreen}
                options={{ headerTitle: '编辑信息' }}
            />
        </Stack.Navigator>
    );
};

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={tabScreenOptions} >
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