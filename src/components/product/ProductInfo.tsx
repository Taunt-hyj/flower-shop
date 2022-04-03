import { colors } from '@/theme';
import { Product } from '@/types';
import formatPrice from '@/utils/formatPrice';
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface Props {
    product: Product;
}

const ProductInfo: React.FC<Props> = ({ product }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    // source={{ uri: product.imageURL }}
                    source={require('D:\\Desktop\\flower-shop\\assets\\images\\flower.jpg')}
                    style={styles.productImg}
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{formatPrice(product.price)}</Text>
                <Text style={styles.desc}>{product.description}</Text>
            </View>
        </View>
    );
};

export default ProductInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgContainer: {
        paddingBottom: 10,
        width: '100%',
        height: 300,
        borderBottomLeftRadius: 50,
        overflow: 'hidden',
    },
    productImg: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    info: {
        padding: 30,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    price: {
        color: colors.primary,
        fontSize: 20,
        paddingTop: 10,
        alignItems: 'flex-end',
    },
    desc: {
        paddingTop: 10,
        fontSize: 15,
        color: '#aaa',
    },
});
