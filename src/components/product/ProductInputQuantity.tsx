import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { colors } from '@/theme';

interface Props {
    value: number;
    onChangeText(value: number): void;
    handleButtonPressed(val: string): void;
    disabled?: boolean;
}

const InputQuantity: React.FC<Props> = ({
    value,
    onChangeText,
    handleButtonPressed,
    disabled,
}) => {
    const handleChangeText = (val: string) => {
        onChangeText(Number(val));
    };

    return (
        <View style={styles.qtyContainer}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.qtyBtn,
                    { borderLeftWidth: 1, borderLeftColor: '#d5d5d5' },
                ]}
                onPress={() => handleButtonPressed('sub')}
                disabled={disabled}
            >
                <View>
                    <Text> - </Text>
                </View>
            </TouchableOpacity>
            <TextInput
                keyboardType="numeric"
                value={String(value)}
                style={styles.input}
                onChangeText={handleChangeText}
            />
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.qtyBtn,
                    { borderRightWidth: 1, borderRightColor: '#d5d5d5' },
                ]}
                onPress={() => handleButtonPressed('add')}
                disabled={disabled}
            >
                <View>
                    <Text> + </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default InputQuantity;

const styles = StyleSheet.create({
    qtyContainer: {
        flexDirection: 'row',
        borderColor: colors.lightGray,
        borderWidth: 1,
        width: 100,
    },
    qtyBtn: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'transparent',
    },
    input: {
        width: 40,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#f7f7f7',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: colors.lightGray,
    },
});
