import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '@/theme';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';


const Classification = () => {
    const navigation = useNavigation();

    return (
        <View style={{ padding: 5, borderRadius: 15, backgroundColor: colors.white }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 30 }}>
                <TouchableOpacity activeOpacity={0.8} key={0} onPress={() => navigation.navigate(navigationNames.searchScreen, { category: 'men' })}>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <MaterialCommunityIcons name="flower" size={28} color={colors.primary} />
                        <Text style={{ fontSize: 12, color: colors.gray }}>精品鲜花</Text>
                    </View>
                </TouchableOpacity >

                <TouchableOpacity activeOpacity={0.8} key={0} onPress={() => navigation.navigate(navigationNames.searchScreen, { category: 'women' })}>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <FontAwesome name="birthday-cake" size={28} color={colors.primary} />
                        <Text style={{ fontSize: 12, color: colors.gray }}>生日祝福</Text>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity activeOpacity={0.8} key={0} onPress={() => navigation.navigate(navigationNames.searchScreen, { category: 'love' })}>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <MaterialCommunityIcons name="flower-poppy" size={28} color={colors.primary} />
                        <Text style={{ fontSize: 12, color: colors.gray }}>表白求婚</Text>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity activeOpacity={0.8} key={0} onPress={() => navigation.navigate(navigationNames.searchScreen)}>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Feather name="more-horizontal" size={28} color={colors.primary} />
                        <Text style={{ fontSize: 12, color: colors.gray }}>更多</Text>
                    </View>
                </TouchableOpacity >
            </View >
        </View >

    );
};

export default Classification;