import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigation from './AuthNavigation';
import HomeTabNavigator from './HomeTabNavigator';
import navigationNames from './navigationNames';
import { ProductScreen } from '@/screens';
import { AuthLoading } from '@/components/auth';
import { useAuth } from '@/contexts';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
    const { loading } = useAuth();

    if (loading) {
        return <AuthLoading />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
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
                    options={{ headerTitle: '商品页' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}