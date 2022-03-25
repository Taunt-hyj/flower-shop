import { LoginScreen, SignUpScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import navigationNames from './navigationNames';

const RootStack = createNativeStackNavigator();

export default function () {
    return (
        <RootStack.Navigator>
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
