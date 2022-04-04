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
import formatPrice from '@/utils/formatPrice';

import { colors } from '@/theme';
import navigationNames from '@/navigation/navigationNames';
import { Product } from '@/types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Props {
    val: Product;
}

const HomeListCell = ({ val }: Props) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate(navigationNames.productScreen, { id: val._id })}
        >
            <View style={[styles.item, { height: windowHeight * 0.6, width: windowWidth * 0.85 }]}>
                <Image
                    source={{ uri: val.imageURL }}
                    style={styles.imageStyles}
                />
                <View style={styles.ViewItem}>
                    <View style={styles.textViewItem}>
                        <Text
                            style={styles.textItem}
                            numberOfLines={1}
                        >
                            {val.name}
                        </Text>
                    </View>

                    <View style={styles.desViewItem}>
                        <Text style={styles.desItem} numberOfLines={2}>  {val.description}</Text>
                    </View>
                    <View style={styles.priceViewItem}>
                        <Text style={styles.priceItem}>{formatPrice(val.price)}</Text>
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
        width: 200,
    },
    desViewItem: {
        paddingTop: 13,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    desItem: {
        fontSize: 10,
        color: '#aaa',

    },
    priceViewItem: {
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    priceItem: {
        fontSize: 18,
        color: colors.primary,
    },
});