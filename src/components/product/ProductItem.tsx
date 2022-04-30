import navigationNames from '@/navigation/navigationNames';
import { colors } from '@/theme';
import { Product } from '@/types';
import formatPrice from '@/utils/formatPrice';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface Props {
    product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate(navigationNames.productScreen, {
            id: product._id,
        });
    };

    return (
        <TouchableOpacity activeOpacity={0.8}
            onPress={handleNavigate} style={styles.list}>
            <View style={styles.listContent}>
                <Image
                    source={{ uri: product.imageURL }}
                    style={styles.listImg}
                />
                <View style={styles.info}>
                    <View>
                        <Text style={styles.name} numberOfLines={1}>
                            {product.name}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.price}>{formatPrice(product.price)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    list: {
        width: '50%',
        marginBottom: 10,
    },
    listContent: {
        marginHorizontal: 5,
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    listImg: {
        width: '100%',
        height: 200,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
    },
    info: {
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    name: {
        fontSize: 14,
    },
    price: {
        paddingTop: 5,
        paddingRight: 10,
        textAlign: 'right',
        fontSize: 14,
        color: colors.primary,
        fontWeight: '700',
    },
});
