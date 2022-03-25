
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
        paddingTop: 80,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    SearchContainer: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        marginVertical: 50,
    },
    textInput: {
        fontSize: 18,
        marginHorizontal: 5,
        color: colors.dark,
        flex: 1,
        height: '100%',
    },
    item: {
        marginHorizontal: 10,
    },
    titleItem: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 10,
    },
    textItem: {
        position: 'absolute',
        top: '80%',
        left: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%',
        width: '80%',
        backgroundColor: colors.white,
        borderRadius: 25,
    },
    imageStyles: {
        borderRadius: 25,
        height: '100%',
        width: '100%'
    },
});