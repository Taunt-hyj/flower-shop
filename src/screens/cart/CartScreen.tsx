import {
    View,
    Text,
    Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import navigationNames from '@/navigation/navigationNames';
import { styles } from './Styles';
import { colors } from '@/theme';

const cartItems = [];


const EmptyView = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.emptycontainer}>
            <Text style={styles.emptyText}> 你的购物车还是空的哦~   :( </Text>
            <Button
                style={styles.btn}
                color={colors.orgin} title="Go Shop Now"
                onPress={() => navigation.navigate(navigationNames.homeTab)}
            />
        </View>
    );
}

const CartScreen = () => {
    if (cartItems.length == 0) {
        return <EmptyView />;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CartScreen</Text>
            <View style={styles.separator} />
        </View>
    );
};

export default CartScreen;


