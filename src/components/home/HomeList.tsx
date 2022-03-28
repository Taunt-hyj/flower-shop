import {
    View,
    FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { HomeService } from '@/services/HomeService';
import HomeListCell from './HomeListCell'

const HomeList = () => {
    const [LoadingHome, setLoadingHome] = useState(false);
    const [HomeDate, setHomeDate] = useState([]);

    const renderItem = ({ item }) => <HomeListCell val={item} />;

    useEffect(() => {
        const fetchHome = async () => {
            try {
                setLoadingHome(true);
                const results = await HomeService.getHome();
                setHomeDate(results);
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
            <View>
                <FlatList
                    data={HomeDate}
                    renderItem={renderItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }
}

export default HomeList;