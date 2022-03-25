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
        "name": "繁华若梦",
        "rate": "4.8",
        "image": "assets/tea1.jpg",
        "count": "45",
        "price": "13",
        "profile": "A delicious and refreshing frozen mango ice ceram,in hot weather to create the perfect pulp drink! This cream slushine is made from fresh fruit,ice cubes andcream. It will provide you with refreshing throughout the summer~~",
    },
    {
        "name": "眉目传情",
        "rate": "4.5",
        "image": "assets/tea2.jpg",
        "count": "22",
        "price": "17",
        "profile": "A delicious and refreshing frozen mango ice ceram,in hot weather to create the perfect pulp drink! This cream slushine is made from fresh fruit,ice cubes andcream. It will provide you with refreshing throughout the summer~~",
    },
    {
        "name": "浮光撩影",
        "rate": "4.3",
        "image": "assets/tea3.jpg",
        "count": "65",
        "price": "22",
        "profile": "A delicious and refreshing frozen mango ice ceram,in hot weather to create the perfect pulp drink! This cream slushine is made from fresh fruit,ice cubes andcream. It will provide you with refreshing throughout the summer~~",
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
                <View style={styles.ViewItem}>
                    <View style={styles.textViewItem}>
                        <Text style={styles.textItem}>{val.name}</Text>
                    </View>
                    <View style={styles.rateViewItem}>
                        <Text style={styles.rateItem}>评分：{val.rate}分</Text>
                    </View>
                    <View style={styles.priceViewItem}>
                        <Text style={styles.priceItem}>￥ {val.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >

    );
}

const HomeScreen = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    const renderItem = ({ item }) => <Item val={item} />;

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
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate(navigationNames.productScreen)}
            >
                <View style={styles.moreListView}>
                    <Text style={styles.moreListText}>更多 >></Text>
                </View>
            </TouchableWithoutFeedback>
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



