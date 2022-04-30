import React from 'react';
import { useCart } from '@/contexts';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { colors } from '@/theme';
import navigationNames from '@/navigation/navigationNames';
import { AddressButton } from '@/components/address';
import { CartSubTotal } from '@/components/cart';
import { useToast } from '@/contexts';
import { CheckoutService } from '@/services';

interface RouteParams {
    addressItem: AddressItem;
}

const CheckoutScreen = () => {
    const { clearCart } = useCart();

    const navigation = useNavigation();

    const { showToast } = useToast();

    const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
    let item = route?.params?.addressItem;

    navigation.setOptions({
        title: '',
        headerTransparent: true,
    });

    const _renderItem = (label1, label2) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                <Text style={{ fontSize: 14, }}>{label1}</Text>
                <Text style={{ fontSize: 14, color: '#a3a3a3' }}>{label2}</Text>
            </View>
        )
    }


    const addCartItem = async () => {
        try {
            if (item) {
                const results = await CheckoutService.addOrderItem();
                navigation.navigate(navigationNames.payScreen, { results });
                clearCart();
            }
            else {
                showToast('error', '请选择收货地址！');
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={{ paddingVertical: 20 }}>
                    <AddressButton />
                </View>
                <View style={{ borderRadius: 20, backgroundColor: colors.white }}>
                    {_renderItem('优惠卷', '暂无优惠卷可用 >')}
                    {_renderItem('订单备注', '请输入 >')}
                    {_renderItem('发票抬头', '不需要开发票 >')}
                </View>
                <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                    <Text style={{ fontSize: 12, color: '#a3a3a3' }}>品质保障·急速退款·无接触配送·资质规则</Text>
                </View>
            </ScrollView >
            <View style={styles.bottomContainer}>
                <CartSubTotal />
                <TouchableOpacity activeOpacity={0.8} onPress={addCartItem}>
                    <Text style={styles.subtext}> 提交订单 </Text>
                </TouchableOpacity>
            </View>
        </View >
    );

};

export default CheckoutScreen;


const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 90,
        flex: 1,
        backgroundColor: colors.lighterGray,
    },
    scroll: {
        flex: 1,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.orgin,
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginVertical: 20,
        borderColor: colors.lightGray,
        borderRadius: 50,
    },
    subtext: {
        fontWeight: '700',
        color: colors.white,
        fontSize: 17,
    },
});