import { TextInput, Button, PageLoader } from '@/components/ui';
import { useToast } from '@/contexts';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { useAddress } from '@/contexts';
import { View, StyleSheet } from 'react-native';
import { AddressItem } from '@/types';

interface RouteParams {
    addressItem: AddressItem;
}

const EditAddressScreen = () => {
    const { showToast } = useToast();
    const { addAddressItem, updateAddressItem } = useAddress();
    const navigation = useNavigation();
    const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
    const item = route?.params?.addressItem;

    const initialState = {
        address: item?.address || '',
        name: item?.name || '',
        phone: item?.phone || '',
    };

    const [address, setaddress] = useState(initialState);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = () => {
        if (!address.address || !address.name || !address.phone) {
            showToast('error', '请填写完整！');
            return;
        }
        handleChangePassword();
    };

    const handleChangePassword = async () => {
        try {
            setSubmitting(true);
            if (item?._id) {
                await updateAddressItem(item._id, address.address, address.name, address.phone);
            }
            else {
                await addAddressItem(address.address, address.name, address.phone);
            }
            setaddress(initialState);
            showToast('success', '保存新地址成功');
            navigation.goBack();
        } catch (error) {
            showToast('error', error.message);
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (name: string, value: string) => {
        setaddress({ ...address, [name]: value });
    };

    const pageLoaderElement = submitting ? (
        <PageLoader visible={submitting} />
    ) : null;

    return (
        <View style={styles.container}>
            {pageLoaderElement}
            <TextInput
                placeholder="地址"
                value={address.address}
                onChangeText={(val) => handleChange('address', val)}
            />
            <TextInput
                placeholder="姓名"
                onChangeText={(val) => handleChange('name', val)}
                value={address.name}
            />
            <TextInput
                placeholder="手机号"
                onChangeText={(val) => handleChange('phone', val)}
                value={address.phone}
            />
            <View style={styles.bottomContainer}>
                <Button title="保存" onPress={handleSubmit} disabled={submitting} />
            </View>
        </View>
    );
};

export default EditAddressScreen;

const styles = StyleSheet.create({
    bottomContainer: {
        marginTop: 30,
    },
    container: {
        padding: 15,
    },
});
