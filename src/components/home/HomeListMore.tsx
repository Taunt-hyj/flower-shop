import {
    View,
    TouchableWithoutFeedback,
    Text,
    StyleSheet,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import navigationNames from '@/navigation/navigationNames';
import { colors } from '@/theme';


const HomeListMore = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ padding: 20 }}>
                <Text style={styles.portext}>热销产品</Text>
            </View>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate(navigationNames.searchScreen)}
            >
                <View style={styles.moreListView}>
                    <Text style={styles.moreListText}>更多 {'>'}{'>'}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default HomeListMore;

const styles = StyleSheet.create({

    moreListView: {
        padding: 15,
        alignItems: 'flex-end',
    },
    portext: {
        fontSize: 18,
        color: colors.dark,
        fontWeight: 'bold',
    },
    moreListText: {
        fontSize: 14,
        color: '#bfbfbf',
    },
});