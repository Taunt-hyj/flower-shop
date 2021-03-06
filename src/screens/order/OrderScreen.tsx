import { colors } from '@/theme';
import * as React from 'react';
import { useWindowDimensions, View } from 'react-native';
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
        style={{ height: 40, backgroundColor: colors.lighterGray }}
        pressColor={colors.lighterGray}
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
    const [index, setIndex] = React.useState(_routeId);
    const [routes] = React.useState([
        { key: 'all', title: '全部' },
        { key: 'pay', title: '待付款' },
        { key: 'goods', title: '待收货' },
        { key: 'sale', title: '售后' },
    ]);

    const [orders, setOrders] = useState<Order[]>([]);
    const [error, setError] = useState<any>(null);
    const [LoadingOrder, setLoadingOrder] = useState(false);

    const fetchOrders = async () => {
        try {
            setLoadingOrder(true);
            const results = await OrderService.getOrders();
            setOrders(results);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoadingOrder(false);
        }
    };


    useEffect(() => {
        fetchOrders();
    }, []);

    if (LoadingOrder) {
        return <View />
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    const OrderItemScreen = ({ route }) => {
        let goods: any = [];
        switch (route.key) {
            case 'all':
                return <OrderList orders={orders} />;
            case 'pay':
                goods = orders.filter((value) => value.state === 'pay');
                return <OrderList orders={goods} />;
            case 'goods':
                goods = orders.filter((value) => value.state === 'goods');
                return <OrderList orders={goods} />;
            case 'sale':
                goods = orders.filter((value) => value.state === 'sale');
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
