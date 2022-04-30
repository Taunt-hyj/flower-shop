import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import navigationNames from '@/navigation/navigationNames';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { colors } from '@/theme';
import { Entypo } from '@expo/vector-icons';
import { AddressItem } from '@/types'
interface RouteParams {
    addressItem: AddressItem;
}
const AddressButton = () => {
    const navigation = useNavigation();

    const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
    let item = route?.params?.addressItem;

    const _chooseAddress = () => {
        navigation.navigate(navigationNames.addressScreen, { choose: true });
    };

    const AddressEmpty = () => {
        return (
            <View style={styles.emptyView}>
                <Text style={{ fontSize: 15 }}>请选择收货地址</Text>
            </View>
        );
    }

    const AddressOwn = (data) => {
        return (
            <View style={styles.emptyOwn}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ padding: 20 }}>
                        <Entypo name="location-pin" size={24} color="orange" />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, paddingVertical: 3 }}>{data?.data?.address}</Text>
                        <Text style={{ fontSize: 14, paddingVertical: 3 }}>{data?.data?.name}    {data?.data?.phone}</Text>
                    </View>
                </View>
            </View >
        );
    }

    return (
        <TouchableOpacity onPress={_chooseAddress}>
            <View style={styles.container}>
                {item ? <AddressOwn data={item} /> : <AddressEmpty />}
            </View>
        </TouchableOpacity>
    );
};

export default AddressButton;

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: colors.white,
        borderRadius: 20,
    },
    emptyView: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyOwn: {
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
});
