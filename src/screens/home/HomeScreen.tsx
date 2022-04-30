import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { Classification } from '@/components/classification';
import { HomeList, HomeListMore } from '@/components/home'
import { colors } from '@/theme';
import { Banner } from '@/components/banner';
import { SearchForm } from '@/components/search';
import { useNavigation } from '@react-navigation/native';
import navigationNames from '@/navigation/navigationNames';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState('');
    const handleSubmit = () => {
        navigation.navigate(navigationNames.searchScreen, { keyword: searchText });
        setSearchText('');
    };

    return (
        <ScrollView
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
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
                <View style={styles.bannerView}>
                    <Banner />
                </View>
                <View style={styles.ClassificationView}>
                    <Classification />
                </View>
                <View style={{}}>
                    <View style={{ backgroundColor: colors.white, borderRadius: 20 }}>
                        <HomeListMore />
                        <View style={{ padding: 10 }}>
                            <HomeList />
                        </View>
                    </View>
                </View>
            </View >
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lighterGray,
        paddingTop: 28,
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
        marginTop: 10,
    },
});