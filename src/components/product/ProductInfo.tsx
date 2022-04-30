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
            <View style={{ backgroundColor: colors.white, borderRadius: 10 }}>
                <View style={styles.imgContainer}>
                    <Image
                        source={{ uri: product.imageURL }}
                        style={styles.productImg}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>{formatPrice(product.price)}</Text>
                </View>
            </View>
            <View style={{ paddingVertical: 10 }}>
                <View style={{ paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10, backgroundColor: colors.white }}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <Text style={{ fontSize: 13, color: colors.dark }}>描述：</Text>
                        <Text style={{ fontSize: 13, color: '#aaa', width: '93%' }}>{product.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <Text style={{ fontSize: 13, color: colors.dark }}>月售：</Text>
                        <Text style={styles.desc}>28</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <Text style={{ fontSize: 13, color: colors.dark }}>配送：</Text>
                        <Text style={styles.desc}>现在下单，预计最快约 14:42 送达</Text>
                    </View>
                </View>
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
        padding: 20,
    },
    name: {
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 13,
        color: '#aaa',
    },
    price: {
        color: colors.primary,
        fontSize: 20,
        textAlign: 'right',
    },

});
