import {
    View,
    FlatList,
    Dimensions,
} from 'react-native';
import React from 'react';

import HomeListCell from './HomeListCell'

const HomeList = ({ data }) => {
    const renderItem = ({ item }) => <HomeListCell val={item} />;
    const _keyExtractor = (item) => item._id;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={{ height: windowHeight * 0.63, width: windowWidth * 0.95 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                horizontal={true}
                keyExtractor={_keyExtractor}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default HomeList;