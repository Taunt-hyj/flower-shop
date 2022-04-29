import navigationNames from '@/navigation/navigationNames';
import { colors } from '@/theme';
import { AddressItem as AddressItemType } from '@/types';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


interface Props {
    addressItem: AddressItemType;
}

const CartItem: React.FC<Props> = ({ addressItem }) => {
    const navigation = useNavigation();

    const handleNavigate = (id: string) => {
        navigation.navigate(navigationNames.editAddressScreen, { id });
    };

    const handleRemoveCart = async (id: string) => {
        try {
            // setUpdating(true);
            // await removeCartItem(cartItem);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity key={addressItem._id} onPress={() => handleNavigate(addressItem._id)}>
                <View style={styles.emptyOwn}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ padding: 20, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => handleRemoveCart(addressItem._id)}>
                                <AntDesign name="delete" size={20} color="red" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 18, paddingVertical: 3 }}>{addressItem.address}</Text>
                            <Text style={{ fontSize: 14, paddingVertical: 3 }}>{addressItem.name}    {addressItem.phone}</Text>
                        </View>
                    </View>
                </View >
            </TouchableOpacity >
        </View >
    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: colors.white,
        borderRadius: 15,
        marginVertical: 5,
    },
    emptyOwn: {
        margin: 10,
    },
});
