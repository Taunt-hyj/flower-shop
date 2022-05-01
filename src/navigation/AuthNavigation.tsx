import { LoginScreen, SignUpScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import navigationNames from './navigationNames';
import { colors } from '@/theme';

const RootStack = createNativeStackNavigator();

export default function () {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.lighterGray,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <RootStack.Screen
                name={navigationNames.loginScreen}
                component={LoginScreen}
                options={{ headerTitle: '登录' }}
            />
            <RootStack.Screen
                name={navigationNames.signUpScreen}
                component={SignUpScreen}
                options={{ headerTitle: '注册' }}
            />
        </RootStack.Navigator>
    );
}
