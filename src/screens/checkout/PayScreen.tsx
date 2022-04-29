import { colors } from '@/theme';
import React, { useState } from 'react';
import {
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
} from "react-native";
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';
import { CartSubTotal } from '@/components/cart';
import Checkbox from 'expo-checkbox';
import { CheckoutService } from '@/services';



const PayScreen = () => {

    const [indexItem, setIndexItem] = useState(0);
    const navigation = useNavigation();
    const route = useRoute<RouteProp<Record<string, any>, string>>();
    const _id = route.params.results._id;

    navigation.setOptions({
        title: '',
        headerTransparent: true,
    });

    const _onItemClick = (index: number) => {
        setIndexItem(index);
    };
    const _renderItem = (label: string, index: number) => {
        return (

            <TouchableOpacity activeOpacity={1} onPress={() => _onItemClick(index)}>
                <View style={styles.checkBox}>
                    {
                        index === 0
                            ? <Image source={require('@/assets/images/icon_alipay.png')} style={styles.image} />
                            : <Image source={require('@/assets/images/icon_wechat_pay.png')} style={styles.image} />
                    }
                    <Text style={{ fontSize: 20, paddingVertical: 3 }}>{label}</Text>
                    <Checkbox
                        style={{ margin: 50 }}
                        disabled={true}
                        value={indexItem === index}
                    />
                </View>
            </TouchableOpacity>
        )
    };

    const addCartItem = async () => {
        try {
            await CheckoutService.updateOrderItem(_id);
            navigation.navigate(navigationNames.cartScreen)
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={{ flex: 1, }}>
            <ScrollView style={styles.container}>
                <View style={{
                    padding: 20, marginTop: 100,
                }}>
                    <Text style={{ fontSize: 20, paddingVertical: 3 }}>选择支付方式</Text>
                </View>
                {_renderItem('支付宝', 0)}
                {_renderItem(' 微信 ', 1)}
            </ScrollView >
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={addCartItem}>
                    <Text style={styles.subtext}> 付款 </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PayScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f5f6f8'
    },

    checkBox: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginHorizontal: 50,
        width: 80,
        height: 80,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
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