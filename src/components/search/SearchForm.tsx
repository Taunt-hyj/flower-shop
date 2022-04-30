import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { colors } from '@/theme';
import { EvilIcons } from '@expo/vector-icons';

interface Props {
    onSubmit(): void;
    value: string;
    onChangeText(val: string): void;
}

const SearchForm: React.FC<Props> = ({ onSubmit, value, onChangeText }) => {
    return (
        <View style={styles.searchContainer}>
            <EvilIcons name="search" size={24} color="gray" />
            <TextInput
                placeholder="搜索"
                style={styles.textInput}
                placeholderTextColor={'#bfbfbf'}
                onSubmitEditing={onSubmit}
                onChangeText={(val) => onChangeText(val)}
                value={value}
            />
        </View>
    );
};

export default SearchForm;

const styles = StyleSheet.create({
    searchContainer: {
        borderRadius: 50,
        paddingHorizontal: 15,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
        flex: 1,
    },
    textInput: {
        fontSize: 16,
        marginHorizontal: 5,
        color: colors.dark,
        flex: 1,
        height: '100%',
    },
});
