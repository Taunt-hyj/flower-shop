import { ProductInputQuantity } from '@/components/product';
import { useCart } from '@/contexts';
import navigationNames from '@/navigation/navigationNames';
import { colors } from '@/theme';
import { CartItem as CartItemType } from '@/types';
import formatPrice from '@/utils/formatPrice';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Alert,
} from 'react-native';

interface Props {
    cartItem: CartItemType;
}

const CartItem: React.FC<Props> = ({ cartItem }) => {
    const navigation = useNavigation();

    const { removeCartItem, updateCartItemQty } = useCart();

    const [qty, setQty] = useState(cartItem.quantity);
    const [updating, setUpdating] = useState(false);

    const handleNavigate = (id: string) => {
        navigation.navigate(navigationNames.productScreen, { id });
    };

    const handleRemoveCart = async (id: string) => {
        try {
            setUpdating(true);
            await removeCartItem(cartItem);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const updateAsyncCartQty = async (quantity: number) => {
        try {
            await updateCartItemQty(cartItem, quantity);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleButtonClickQty = (method: string) => {
        if (method === 'add') {
            setQty((qty) => qty + 1);
            updateAsyncCartQty(qty + 1);
        } else if (method === 'sub') {
            if (qty > 1) {
                setQty((qty) => qty - 1);
                updateAsyncCartQty(qty - 1);
            }
        }
    };

    const handleChangeQty = (value: number) => {
        setQty(value);
        updateAsyncCartQty(value);
    };

    return (
        <TouchableOpacity key={cartItem._id} onPress={() => handleNavigate(cartItem.product._id)}>
            <View style={styles.cartItem}>
                <Image // source={{ uri: cartItem.product.imageURL }}
                    source={require('D:\\Desktop\\flower-shop\\assets\\images\\flower.jpg')}
                    style={styles.image}
                />
                <View style={styles.info}>
                    <View style={styles.Item}>
                        <Text style={styles.title}> {cartItem.product.name} </Text>
                        <TouchableOpacity onPress={() => handleRemoveCart(cartItem._id)}>
                            <AntDesign name="delete" size={15} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.price}>{formatPrice(cartItem.product.price)}</Text>
                        <ProductInputQuantity
                            value={qty}
                            handleButtonPressed={handleButtonClickQty}
                            onChangeText={handleChangeQty}
                            disabled={updating}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 15,
    },
    cartItem: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    info: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    Item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    price: {
        color: colors.primary,
        fontWeight: '700',
        fontSize: 16,
    },
    btn: {
        width: 100,
        fontSize: 14,
        height: 40,
        marginVertical: 10,
    },
});
