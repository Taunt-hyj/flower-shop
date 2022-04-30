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
import { useAddress } from '@/contexts';


interface Props {
    addressItem: AddressItemType;
    choose: boolean;
}

const AddressItems: React.FC<Props> = ({ addressItem, choose }) => {
    const navigation = useNavigation();
    const { removeAddressItem } = useAddress();

    const handleNavigate = (addressItem) => {
        navigation.navigate(navigationNames.editAddressScreen, { addressItem });
    };

    const handleRemoveCart = async (addressItem) => {
        try {
            await removeAddressItem(addressItem);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const goToCheck = (addressItem) => {
        if (choose.choose) navigation.navigate(navigationNames.checkoutScreen, { addressItem });
    };

    return (
        <View style={styles.container}>
            <View style={styles.emptyOwn}>
                <TouchableOpacity key={addressItem._id} onPress={() => goToCheck(addressItem)}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ padding: 20, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <TouchableOpacity key={addressItem._id} onPress={() => handleNavigate(addressItem)}>
                                <AntDesign name="edit" size={20} color="black" />
                            </TouchableOpacity >
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '65%' }}>
                            <Text numberOfLines={1} style={{ fontSize: 18, paddingVertical: 3 }}>{addressItem.address}</Text>
                            <Text numberOfLines={1} style={{ fontSize: 14, paddingVertical: 3 }}>{addressItem.name}    {addressItem.phone}</Text>
                        </View>
                        <View style={{ padding: 20, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => handleRemoveCart(addressItem)}>
                                <AntDesign name="delete" size={20} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity >
            </View >
        </View >

    );
};

export default AddressItems;

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
