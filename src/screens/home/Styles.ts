
import { StyleSheet } from 'react-native';
import { colors } from '@/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.lighterGray,
    },
    titleView: {
        paddingHorizontal: 20,
        paddingTop: 70,
        paddingBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    SearchContainer: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        marginVertical: 20,
    },
    moreListView: {
        padding: 15,
        alignItems: 'flex-end',
    },
    moreListText: {
        fontSize: 14,
        color: '#bfbfbf',
    },
    item: {
        marginHorizontal: 10,
    },
    ViewItem: {
        position: 'absolute',
        top: '80%',
        left: '5%',
        height: '40%',
        width: '90%',
        backgroundColor: colors.white,
        borderRadius: 25,
        padding: 40,
    },
    textViewItem: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    textItem: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    rateViewItem: {
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rateItem: {
        fontSize: 13,
        color: colors.orgin,
    },
    priceViewItem: {
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    priceItem: {
        fontSize: 17,
        color: colors.dark,
    },
    imageStyles: {
        borderRadius: 25,
        height: '100%',
        width: '100%'
    },
});