import { TextInput, Button, PageLoader } from '@/components/ui';
import { useToast } from '@/contexts';
import { AuthService } from '@/services';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const ChangePasswordScreen = () => {
    const { showToast } = useToast();
    const navigation = useNavigation();

    const initialState = {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    };

    const [password, setPassword] = useState(initialState);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = () => {
        if (!password.newPassword || !password.oldPassword) {
            showToast('error', 'Please the provide password field.');
            return;
        }

        if (password.newPassword !== password.confirmNewPassword) {
            showToast('error', 'New Password and Confirm Password does not match');
            return;
        }

        handleChangePassword();
    };

    const handleChangePassword = async () => {
        try {
            setSubmitting(true);
            await AuthService.changePassword(password);
            setPassword(initialState);
            showToast('success', '更改密码成功');
            navigation.goBack();
        } catch (error) {
            showToast('error', error.message);
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (name: string, value: string) => {
        setPassword({ ...password, [name]: value });
    };

    const pageLoaderElement = submitting ? (
        <PageLoader visible={submitting} />
    ) : null;

    return (
        <View style={styles.container}>
            {pageLoaderElement}
            <TextInput
                placeholder="旧密码"
                value={password.oldPassword}
                onChangeText={(val) => handleChange('oldPassword', val)}
                secureTextEntry
            />
            <TextInput
                placeholder="新密码"
                onChangeText={(val) => handleChange('newPassword', val)}
                value={password.newPassword}
                secureTextEntry
            />
            <TextInput
                placeholder="重复新密码"
                onChangeText={(val) => handleChange('confirmNewPassword', val)}
                value={password.confirmNewPassword}
                secureTextEntry
            />
            <View style={styles.bottomContainer}>
                <Button title="更改" onPress={handleSubmit} disabled={submitting} />
            </View>
        </View>
    );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
    bottomContainer: {
        marginTop: 30,
    },
    container: {
        padding: 15,
    },
});
