import { AuthLink } from '@/components/auth';
import { PageLoader, Button, TextInput } from '@/components/ui';
import { useAuth, useToast } from '@/contexts';
import navigationNames from '@/navigation/navigationNames';
import { colors } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import { Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Yup from 'yup';

const LoginScreen = () => {
    const navigation = useNavigation();
    const { login } = useAuth();
    const { showToast } = useToast();

    const [submitting, setSubmitting] = useState(false);

    const handleLogin = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        try {
            setSubmitting(true);
            await login(email, password);
            navigation.navigate(navigationNames.rootScreen);
        } catch (error) {
            showToast('error', error.message);
        } finally {
            setSubmitting(false);
        }
    };
    const LoginSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, '密码太短了!')
            .required('需要填写密码'),
        email: Yup.string().email('无效邮箱').required('需要填写邮箱'),
    });

    return (
        <View style={styles.container}>
            <PageLoader visible={submitting} />
            <Formik
                validationSchema={LoginSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={async (values) => handleLogin(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <View style={styles.group}>
                            <TextInput
                                label="邮箱"
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            <ErrorMessage name="email">
                                {(msg) => (
                                    <View style={styles.errorContainer}>
                                        <Text style={styles.error}>{msg}</Text>
                                    </View>
                                )}
                            </ErrorMessage>
                        </View>
                        <View style={styles.group}>
                            <TextInput
                                label="密码"
                                style={styles.input}
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            <ErrorMessage name="password">
                                {(msg) => (
                                    <View style={styles.errorContainer}>
                                        <Text style={styles.error}>{msg}</Text>
                                    </View>
                                )}
                            </ErrorMessage>
                        </View>
                        <View style={styles.group}>
                            <Button title="登录" onPress={handleSubmit} />
                        </View>
                    </>
                )}
            </Formik>
            <AuthLink type="login" />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    pageTitle: {
        fontSize: 20,
    },
    group: {
        marginVertical: 10,
    },
    input: {
        height: 45,
        borderColor: colors.dark,
        borderBottomWidth: 1,
    },
    errorContainer: {
        paddingTop: 3,
    },
    error: {
        color: colors.danger,
        fontSize: 10,
    },
});


