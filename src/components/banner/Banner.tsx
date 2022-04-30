import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

const Banner = () => {
    return (
        <PagerView
            style={styles.pagerView}
            initialPage={0}
            pageMargin={5}
        >
            <View key="1" style={styles.imageView}>
                <Image
                    source={{ uri: 'https://img02.hua.com/slider/22_mothersday_banner_m.jpg?v11' }}
                    style={styles.imageStyles}
                    resizeMode={'stretch'}
                />
            </View>
            <View key="2" style={styles.imageView}>
                <Image
                    source={{ uri: 'https://img02.hua.com//chanpintupian/2022banner/22_birthday.jpg' }}
                    style={styles.imageStyles}
                    resizeMode={'stretch'}
                />
            </View>
            <View key="3" style={styles.imageView}>
                <Image
                    source={{ uri: 'https://img02.hua.com/slider/21_jnz_banner_m.jpg' }}
                    style={styles.imageStyles}
                    resizeMode={'stretch'}
                />
            </View>
            <View key="4" style={styles.imageView}>
                <Image
                    source={{ uri: 'https://img02.hua.com/slider/21_brand_banner.png?v1' }}
                    style={styles.imageStyles}
                    resizeMode={'stretch'}
                />
            </View>
        </PagerView>
    );
};

export default Banner;

const styles = StyleSheet.create({
    pagerView: {
        width: '100%',
        height: '100%',
    },
    imageView: {
        padding: 10,
        borderRadius: 10,
    },
    imageStyles: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
});