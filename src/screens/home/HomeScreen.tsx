import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Classification } from '@/components/classification';
import { HomeList, HomeListMore } from '@/components/home'
import { colors } from '@/theme';
import { Banner } from '@/components/banner';
import { SearchForm } from '@/components/search';
import { useNavigation } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';
import { HomeService } from '@/services/HomeService';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
    const navigation = useNavigation();

    const [LoadingHome, setLoadingHome] = useState(false);
    const [homeData, sethomeData] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleSubmit = () => {
        navigation.navigate(navigationNames.searchScreen, { keyword: searchText });
        setSearchText('');
    };

    const fetchHome = async () => {
        try {
            setLoadingHome(true);
            const results = await HomeService.getHome();
            sethomeData(results.products);
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingHome(false);
        }
    };

    useEffect(() => {
        fetchHome();
    }, []);

    if (LoadingHome || homeData.length === 0) {
        return <View />
    }



    return (
        <View>
            <View style={styles.SearchContainer}>
                <View style={{ justifyContent: 'center', paddingHorizontal: 20 }}>
                    <Text style={styles.title}>鲜花到家</Text>
                </View>
                <SearchForm
                    value={searchText}
                    onChangeText={setSearchText}
                    onSubmit={handleSubmit}
                />
            </View>
            <ScrollView
                alwaysBounceVertical={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <View style={styles.bannerView}>
                        <Banner />
                    </View>
                    <View style={styles.ClassificationView}>
                        <Classification />
                    </View>
                    <View style={{}}>
                        <View style={{ backgroundColor: colors.white, borderRadius: 15 }}>
                            <HomeListMore />
                            <View style={{ paddingHorizontal: 10, paddingTop: 10, paddingBottom: 30 }}>
                                <HomeList data={homeData} />
                            </View>
                        </View>
                    </View>
                </View >
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lighterGray,
        paddingBottom: 10,
    },
    titleView: {
        paddingHorizontal: 30,
        paddingBottom: 30,
    },
    bannerView: {
        width: windowWidth,
        height: windowHeight * 0.24,
    },
    ClassificationView: {
        paddingBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    SearchContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
});