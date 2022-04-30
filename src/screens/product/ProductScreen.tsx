import {
    ProductInputQuantity,
    ProductInfo,
    ProductSkeleton,
    ProductRelated,
} from '@/components/product';
import { Button, ErrorMessage } from '@/components/ui';
import { useAuth, useCart, useToast } from '@/contexts';
import navigationNames from '@/navigation/navigationNames';
import { ProductService } from '@/services';
import { colors } from '@/theme';
import { Product, Products } from '@/types';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Linking, Animated, StyleSheet, View, Alert, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface RouteParams {
    id: string;
}

const ProductScreen = () => {
    const { showToast } = useToast();
    const { isAuthenticated } = useAuth();
    const { addCartItem } = useCart();

    const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
    const navigation = useNavigation();

    const productId = route.params.id;

    const [product, setProduct] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<Products>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [qty, setQty] = useState(1);
    const [error, setError] = useState<string | null>(null);

    const animation = new Animated.Value(0);
    const opacity = animation.interpolate({
        inputRange: [0, 1, 200],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp',
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setIsLoading(true);
                const results = await ProductService.getProduct(productId);
                setProduct(results.product);
                setRelatedProducts(results.relatedProducts);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProduct();
    }, [productId]);

    navigation.setOptions({
        title: '',
        headerTransparent: true,
        headerBackground: () => (
            <Animated.View
                style={[StyleSheet.absoluteFill, styles.headerView, { opacity }]}
            />
        ),
    });

    const handleButtonClickQty = (method: string) => {
        if (method === 'add') {
            setQty((qty) => qty + 1);
        } else if (method === 'sub') {
            if (qty > 1) {
                setQty((qty) => qty - 1);
            }
        }
    };

    const handleChangeQty = (value: number) => {
        setQty(value);
    };

    const handleAddToCart = async () => {
        if (!isAuthenticated) {
            showToast('error', '请先登录 :(');
            navigation.navigate(navigationNames.rootAuthScreen);
            return;
        }
        if (!product) return;
        try {
            await addCartItem(product, qty);
            showToast('success', '加入购物车成功！');
        } catch (error) {
            showToast('error', 'Error in adding cart. Please try again later');
        }
    };

    if (isLoading || !product) {
        return <ProductSkeleton />;
    }

    if (error) {
        return (
            <ErrorMessage message="The product may not exist or we've encounter an error. Please try again" />
        );
    }


    const callPhone = (phone) => {
        const tel = `tel:${phone}`;
        Alert.alert('联系方式', phone, [
            { text: '取消' },
            {
                text: '确定',
                onPress: () => {
                    Linking.canOpenURL(tel).then((supported) => {
                        if (!supported) showToast('error', `您的设备不支持该功能，请手动拨打 ${phone}`)
                        else return Linking.openURL(tel)
                    }).catch(error => showToast('error', error))
                }
            }])
    }

    return (
        <>
            <View style={styles.main}>
                <Animated.ScrollView
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: animation } } }],
                        { useNativeDriver: true }
                    )}
                >
                    <ProductInfo product={product} />
                    <ProductRelated products={relatedProducts} />

                </Animated.ScrollView>
                <View style={styles.bottom}>
                    <TouchableWithoutFeedback onPress={() => callPhone('13456787654')}>
                        <AntDesign name="customerservice" size={24} color="black" />
                    </TouchableWithoutFeedback>
                    <View style={{ flexDirection: 'row', height: 30, alignItems: 'center' }}>
                        <View style={{ padding: 10 }}>
                            <ProductInputQuantity
                                value={qty}
                                handleButtonPressed={handleButtonClickQty}
                                onChangeText={handleChangeQty}
                            />
                        </View>
                        <Button
                            title="加入购物车"
                            type="primary"
                            style={styles.btnAddCart}
                            onPress={handleAddToCart}
                        />
                    </View>
                </View>
            </View>
        </>
    );
};

export default ProductScreen;

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#fff',
    },
    headerRight: {
        paddingHorizontal: 15,
    },

    btnAddCart: {
        borderRadius: 50,
        width: 120,
    },
    main: {
        flex: 1,
    },
    bottom: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 70,
    },
});
