import {
    View,
    TouchableWithoutFeedback,
    Text,
    StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import navigationNames from '@/navigation/navigationNames';


const HomeListMore = () => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate(navigationNames.productScreen)}
        >
            <View style={styles.moreListView}>
                <Text style={styles.moreListText}>更多 {'>'}{'>'}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default HomeListMore;

const styles = StyleSheet.create({

    moreListView: {
        padding: 15,
        alignItems: 'flex-end',
    },
    moreListText: {
        fontSize: 14,
        color: '#bfbfbf',
    },
});