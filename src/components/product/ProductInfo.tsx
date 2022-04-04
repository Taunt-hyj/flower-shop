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
                    source={{ uri: product.imageURL }}
                    style={styles.productImg}
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.desc}>      {product.description}</Text>
                <Text style={styles.price}>{formatPrice(product.price)}</Text>
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
        borderBottomLeftRadius: 40,
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
        paddingLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
    },
    desc: {
        paddingTop: 15,
        fontSize: 13,
        color: '#aaa',
    },
    price: {
        paddingTop: 15,
        color: colors.primary,
        fontSize: 20,
        textAlign: 'right',
    },

});
