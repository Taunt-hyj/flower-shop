import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import navigationNames from '@/navigation/navigationNames';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@/theme';
import { Entypo } from '@expo/vector-icons';

const data = {
    address: '西南交通大学犀浦校区',
    name: '李四',
    phone: '12323232323',
};

const AddressButton = () => {
    const navigation = useNavigation();

    const _chooseAddress = () => {
        navigation.navigate(navigationNames.addressScreen);
    };

    const AddressEmpty = () => {
        return (
            <View style={styles.emptyView}>
                <Text style={{ fontSize: 15 }}>请选择收货地址</Text>
            </View>
        );
    }

    const AddressOwn = () => {
        return (
            <View style={styles.emptyOwn}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ padding: 20 }}>
                        <Entypo name="location-pin" size={24} color="orange" />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, paddingVertical: 3 }}>{data.address}</Text>
                        <Text style={{ fontSize: 14, paddingVertical: 3 }}>{data.name}    {data.phone}</Text>
                    </View>
                </View>
            </View >
        );
    }

    return (
        <TouchableOpacity onPress={_chooseAddress}>
            <View style={styles.container}>
                {data === null ? <AddressEmpty /> : <AddressOwn />}
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
