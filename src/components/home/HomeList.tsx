import {
    View,
    FlatList,
    Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { HomeService } from '@/services/HomeService';
import HomeListCell from './HomeListCell'

const HomeList = ({ }) => {
    const [LoadingHome, setLoadingHome] = useState(false);
    const [HomeDate, setHomeDate] = useState([]);

    const renderItem = ({ item }) => <HomeListCell val={item} />;
    const _keyExtractor = (item) => item._id;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    useEffect(() => {
        const fetchHome = async () => {
            try {
                setLoadingHome(true);
                const results = await HomeService.getHome();
                setHomeDate(results.products);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingHome(false);
            }
        };
        fetchHome();
    }, []);

    if (LoadingHome || HomeDate.length === 0) {
        return <View />
    }
    else {
        return (
            <View style={{ height: windowHeight * 0.6, width: windowWidth * 0.95 }}>
                <FlatList
                    data={HomeDate}
                    renderItem={renderItem}
                    horizontal={true}
                    keyExtractor={_keyExtractor}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }
}

export default HomeList;