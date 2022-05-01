import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigation from './AuthNavigation';
import HomeTabNavigator from './HomeTabNavigator';
import navigationNames from './navigationNames';
import {
    ProductScreen,
    SearchScreen,
    CheckoutScreen,
    AddressScreen,
    EditAddressScreen,
    PayScreen,
    OrderScreen
} from '@/screens';
import { AuthLoading } from '@/components/auth';
import { useAuth } from '@/contexts';
import { colors } from '@/theme';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
    const { loading } = useAuth();

    if (loading) {
        return <AuthLoading />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen
                    name={navigationNames.rootScreen}
                    component={HomeTabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={navigationNames.rootAuthScreen}
                    component={AuthNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={navigationNames.productScreen}
                    component={ProductScreen}
                />

                <Stack.Screen
                    name={navigationNames.searchScreen}
                    component={SearchScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={navigationNames.checkoutScreen}
                    component={CheckoutScreen}
                    options={{
                        headerTitle: '确认订单',
                        headerStyle: {
                            backgroundColor: colors.lighterGray,
                        },
                    }}
                />
                <Stack.Screen
                    name={navigationNames.payScreen}
                    component={PayScreen}
                    options={{
                        headerTitle: '付款',
                        headerStyle: {
                            backgroundColor: colors.lighterGray,
                        },
                    }}
                />
                <Stack.Screen
                    name={navigationNames.addressScreen}
                    component={AddressScreen}
                    options={{
                        headerTitle: '地址',
                        headerStyle: {
                            backgroundColor: colors.lighterGray,
                        },
                    }}
                />
                <Stack.Screen
                    name={navigationNames.editAddressScreen}
                    component={EditAddressScreen}
                    options={{
                        headerTitle: '编辑地址',
                        headerStyle: {
                            backgroundColor: colors.lighterGray,
                        },
                    }}
                />
                <Stack.Screen
                    name={navigationNames.orderScreen}
                    component={OrderScreen}
                    options={{
                        headerTitle: '订单',
                        headerStyle: {
                            backgroundColor: colors.lighterGray,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}