import { colors } from '@/theme';
import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';
import { AddressList } from '@/components/address';

const AddressScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, }}>
            <View style={styles.addressList}>
                <AddressList />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(navigationNames.editAddressScreen)}>
                <View style={styles.bottomContainer}>
                    <Text style={styles.subtext}> 新增地址 </Text>

                </View>
            </TouchableOpacity>
        </View>

    );
};

export default AddressScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f5f6f8'
    },
    addressList: {
        flex: 4,
        paddingTop: 30,
        paddingHorizontal: 18,
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