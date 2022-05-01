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
import Checkbox from 'expo-checkbox';
import { CheckoutService } from '@/services';
import { AuthService } from '@/services';
import { useAuth } from '@/contexts';
import { AntDesign } from '@expo/vector-icons';

const PayScreen = () => {
    const { updateCurrentUser } = useAuth();
    const [indexItem, setIndexItem] = useState(0);
    const navigation = useNavigation();
    const route = useRoute<RouteProp<Record<string, any>, string>>();
    const _id = route?.params?.results?._id;

    const _onItemClick = (index: number) => {
        setIndexItem(index);
    };
    const _renderItem = (label: string, index: number) => {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => _onItemClick(index)}>
                <View style={styles.checkBox}>
                    {
                        index === 0
                            ? <AntDesign style={{ marginHorizontal: 50 }} name="wechat" size={40} color="black" />
                            : <AntDesign style={{ marginHorizontal: 50 }} name="alipay-square" size={40} color="black" />
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
            if (_id) {
                await CheckoutService.updateOrderItem(_id);
                navigation.navigate(navigationNames.cartScreen)
            }
            else {
                const data = await AuthService.changeRole();
                await updateCurrentUser(data.user)
                navigation.navigate(navigationNames.profileScreen)
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={{ flex: 1, }}>
            <ScrollView style={styles.container}>
                <View style={{
                    padding: 20, marginTop: 40,
                }}>
                    <Text style={{ fontSize: 20, paddingVertical: 3 }}>选择支付方式</Text>
                </View>
                {_renderItem('支付宝', 0)}
                {_renderItem(' 微信 ', 1)}
            </ScrollView >
            <View style={styles.bottomContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={addCartItem}>
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
        backgroundColor: colors.lighterGray
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
        borderColor: colors.lighterGray,
        borderRadius: 50,
    },
    subtext: {
        fontWeight: '700',
        color: colors.white,
        fontSize: 17,
    },
});