import {
    View,
    Text,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { colors } from '@/theme';
import navigationNames from '@/navigation/navigationNames';
import { Home } from '@/types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Props {
    val: Home;
}

const HomeListCell = ({ val }: Props) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate(navigationNames.productScreen, { id: "624834871c2fdaeeb2d9babf" })}
        >
            <View style={[styles.item, { height: windowHeight * 0.6, width: windowWidth * 0.85 }]}>
                <Image
                    source={require('D:\\Desktop\\flower-shop\\assets\\images\\flower.jpg')}
                    style={styles.imageStyles}
                />
                <View style={styles.ViewItem}>
                    <View style={styles.textViewItem}>
                        <Text style={styles.textItem}>{val.name}</Text>
                    </View>
                    <View style={styles.rateViewItem}>
                        <Text style={styles.rateItem}>评分：{val.rate}分</Text>
                    </View>
                    <View style={styles.priceViewItem}>
                        <Text style={styles.priceItem}>￥ {val.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >

    );
}

export default HomeListCell;

export const styles = StyleSheet.create({
    item: {
        marginHorizontal: 10,
    },
    imageStyles: {
        height: '85%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 25,
    },
    ViewItem: {
        position: 'absolute',
        top: '70%',
        left: '5%',
        height: '30%',
        width: '90%',
        backgroundColor: colors.white,
        padding: 30,
        borderRadius: 25,
    },
    textViewItem: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    textItem: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    rateViewItem: {
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rateItem: {
        fontSize: 13,
        color: colors.orgin,
    },
    priceViewItem: {
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    priceItem: {
        fontSize: 17,
        color: colors.dark,
    },
});