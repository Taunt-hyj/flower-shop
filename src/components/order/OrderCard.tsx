import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '@/theme';
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';


const OrderCard = () => {
    const navigation = useNavigation();


    return (
        <View style={{ padding: 5, borderRadius: 20, backgroundColor: colors.white }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <Text style={{ fontSize: 15, }}>我的订单</Text>
                <TouchableOpacity key={0} onPress={() => navigation.navigate(navigationNames.orderScreen, { id: 0 })}>
                    <Text style={{ fontSize: 14, color: '#a3a3a3' }}>全部订单 ></Text>
                </TouchableOpacity >
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 30 }}>
                <TouchableOpacity key={0} onPress={() => navigation.navigate(navigationNames.orderScreen, { id: 1 })}>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <MaterialCommunityIcons name="credit-card-outline" size={30} color="black" />
                        <Text style={{ fontSize: 12, }}>待付款</Text>
                    </View>
                </TouchableOpacity >

                <TouchableOpacity key={0} onPress={() => navigation.navigate(navigationNames.orderScreen, { id: 2 })}>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <MaterialCommunityIcons name="van-utility" size={30} color="black" />
                        <Text style={{ fontSize: 12 }}>待收货</Text>
                    </View>
                </TouchableOpacity >

                <TouchableOpacity key={0} onPress={() => navigation.navigate(navigationNames.orderScreen, { id: 3 })}>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <AntDesign name="bank" size={30} color="black" />
                        <Text style={{ fontSize: 12, }}>售后</Text>
                    </View>
                </TouchableOpacity >

            </View >
        </View >

    );
};

export default OrderCard;