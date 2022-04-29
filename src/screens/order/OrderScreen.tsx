import { colors } from '@/theme';
import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { OrderList } from '@/components/order';

import { ErrorMessage } from '@/components/ui';
import { OrderService } from '@/services';
import { Order } from '@/types';
import { useState, useEffect } from 'react';

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: colors.orgin }}
        labelStyle={{ color: 'black' }}
        style={{ backgroundColor: colors.lightGray, paddingTop: 80 }}
        pressColor={colors.lightGray}
    />
);

interface RouteParams {
    id: number;
}

const CheckoutScreen = () => {
    const layout = useWindowDimensions();
    const navigation = useNavigation();

    const routeId = useRoute<RouteProp<Record<string, RouteParams>, string>>();
    const _routeId = routeId.params.id;

    navigation.setOptions({
        title: '',
        headerTransparent: true,
    });
    const [index, setIndex] = React.useState(_routeId);
    const [routes] = React.useState([
        { key: 'all', title: '全部' },
        { key: 'pay', title: '待付款' },
        { key: 'goods', title: '待收货' },
        { key: 'sale', title: '售后' },
    ]);

    const [orders, setOrders] = useState<Order[]>([]);
    const [error, setError] = useState<any>(null);
    const fetchOrders = async () => {
        try {
            const results = await OrderService.getOrders();
            setOrders(results);
        } catch (error) {
            setError(error.message);
        } finally {
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    if (error) {
        return <ErrorMessage message={error} />;
    }

    const OrderItemScreen = ({ route }) => {
        let goods: any = [];
        switch (route.key) {
            case 'all':
                return <OrderList orders={orders} />;
            case 'pay':
                orders.map((value) => {
                    if (value.state === 'pay')
                        goods.push(value);
                });
                return <OrderList orders={goods} />;
            case 'goods':
                orders.map((value) => {
                    if (value.state === 'goods')
                        goods.push(value);
                });
                return <OrderList orders={goods} />;
            case 'sale':
                orders.map((value) => {
                    if (value.state === 'sale')
                        goods.push(value);
                });
                return <OrderList orders={goods} />;
            default:
                return null;
        }
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={OrderItemScreen}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
        />
    );
};

export default CheckoutScreen;
