import { colors } from '@/theme';
import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';
import { AddressList } from '@/components/address';

interface RouteParams {
    choose: boolean;
}

const AddressScreen = () => {
    const navigation = useNavigation();

    const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
    const choose = route?.params?.choose;

    return (
        <View style={{ flex: 1, }}>
            <View style={styles.addressList}>
                <AddressList choose={choose} />
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(navigationNames.editAddressScreen)}>
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