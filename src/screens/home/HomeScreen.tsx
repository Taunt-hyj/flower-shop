import {
    View,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
} from 'react-native';
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import navigationNames from '@/navigation/navigationNames';
import { SearchForm } from '@/components/search';
import { styles } from './Styles';

const DATA = [
    {
        "name": "Mango Cream Slushine",
        "rate": "4.8",
        "image": "assets/tea1.jpg",
        "count": "45",
        "price": "13",
        "profile": "A delicious and refreshing frozen mango ice ceram,in hot weather to create the perfect pulp drink! This cream slushine is made from fresh fruit,ice cubes andcream. It will provide you with refreshing throughout the summer~~",
        "comment": {
            "image": "assets/user1.jpg",
            "count": 18,
            "msg": "I recommend it."
        }
    },
    {
        "name": "Hawthorn Tea",
        "rate": "4.5",
        "image": "assets/tea2.jpg",
        "count": "22",
        "price": "17",
        "profile": "A delicious and refreshing frozen mango ice ceram,in hot weather to create the perfect pulp drink! This cream slushine is made from fresh fruit,ice cubes andcream. It will provide you with refreshing throughout the summer~~",
        "comment": {
            "image": "assets/user2.jpg",
            "count": 12,
            "msg": "It tastes great."
        }
    },
    {
        "name": "Rose Green Tea",
        "rate": "4.3",
        "image": "assets/tea3.jpg",
        "count": "65",
        "price": "22",
        "profile": "A delicious and refreshing frozen mango ice ceram,in hot weather to create the perfect pulp drink! This cream slushine is made from fresh fruit,ice cubes andcream. It will provide you with refreshing throughout the summer~~",
        "comment": {
            "image": "assets/user3.jpg",
            "count": 9,
            "msg": "Not bad, not bad."
        }
    },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Item = ({ val }) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate(navigationNames.productScreen)}
        >
            <View style={[styles.item, { height: windowHeight * 0.5, width: windowWidth * 0.85 }]}>
                <Image
                    source={require('D:\\Desktop\\flower-shop\\assets\\images\\flower.jpg')}
                    style={styles.imageStyles}
                />
                <View style={styles.textItem}>
                    <Text style={styles.titleItem}>{val.name}</Text>
                    <Text style={styles.titleItem}>{val.rate}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
}

const HomeScreen = () => {
    const renderItem = ({ item }) => (
        <Item val={item} />
    );

    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>鲜花到家</Text>
            </View>
            <View style={styles.SearchContainer}>
                <SearchForm
                    value={searchText}
                    onChangeText={setSearchText}
                    onSubmit={() => { }}
                />
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View >

    );
};

export default HomeScreen;



