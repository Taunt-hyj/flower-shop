import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';
import { useAuth } from '@/contexts';

const MemberCard = () => {
    const navigation = useNavigation();
    const { currentUser } = useAuth();

    const BuyMember = () => {
        return (
            <View style={{ padding: 5, borderRadius: 20, backgroundColor: '#FFE4B5' }}>
                <TouchableOpacity activeOpacity={0.8} key={0} onPress={() => navigation.navigate(navigationNames.payScreen)}>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>
                        <View>
                            <Text style={{ fontSize: 15, color: '#D2691E' }}>开通会员</Text>
                            <View style={{ paddingTop: 5 }}>
                                <Text style={{ fontSize: 12, color: '#DAA520' }}>开通会员，福利多多</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#CD853F', paddingVertical: 7, paddingHorizontal: 10, borderRadius: 20 }}>
                            <Text style={{ fontSize: 13, color: colors.white }}>立即开通</Text>
                        </View>
                    </View>
                </TouchableOpacity >
            </View >
        );
    }

    const Member = () => {
        return (
            <View style={{ padding: 5, borderRadius: 20, backgroundColor: '#FFE4B5' }}>
                <TouchableOpacity activeOpacity={0.8} key={0} onPress={() => navigation.navigate(navigationNames.homeTab)}>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>
                        <View>
                            <Text style={{ fontSize: 15, color: '#D2691E' }}>你已经是尊贵的会员用户了</Text>
                            <View style={{ paddingTop: 5 }}>
                                <Text style={{ fontSize: 12, color: '#DAA520' }}>快去购物吧</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#CD853F', paddingVertical: 7, paddingHorizontal: 10, borderRadius: 20 }}>
                            <Text style={{ fontSize: 13, color: colors.white }}>去购物</Text>
                        </View>
                    </View>
                </TouchableOpacity >
            </View >
        );
    }

    return (
        currentUser?.role === 'member' ? <Member /> : <BuyMember />
    );
};

export default MemberCard;