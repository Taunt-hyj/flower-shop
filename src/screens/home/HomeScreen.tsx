import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

import { SearchForm } from '@/components/search';
import { HomeList, HomeListMore } from '@/components/home'
import { colors } from '@/theme';


const HomeScreen = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>鲜花到家</Text>
            </View>
            <View style={styles.SearchContainer}>
                <SearchForm
                    value={searchText}
                    onChangeText={setSearchText}
                    onSubmit={() => { }}
                />
            </View>
            <HomeListMore />
            <HomeList />
        </View >
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.lighterGray,
    },
    titleView: {
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    SearchContainer: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        marginVertical: 20,
    },
});