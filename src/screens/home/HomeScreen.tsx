import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import navigationNames from '@/navigation/navigationNames';


const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>
            <View style={styles.separator} />
            <Button
                title="商品页"
                onPress={() => navigation.navigate(navigationNames.productScreen)}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

