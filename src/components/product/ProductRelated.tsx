import { Heading } from '@/components/ui';
import { colors } from '@/theme';
import { Products } from '@/types';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import ProductList from './ProductList';

interface Props {
    products: Products;
}

const ProductRelated: React.FC<Props> = ({ products }) => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>

                <Heading title="相关商品" />
                <ProductList products={products} />
            </View>
        </View>
    );
};

export default ProductRelated;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
    },
});