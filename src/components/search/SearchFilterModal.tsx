import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import SearchFilterSelector from './SearchFilterSelector';
import { FilterData } from '@/types';

interface Props {
    onDismissModal: () => void;
    onApply: (filterData: FilterData) => void;
    initialFilterData: FilterData;
    onReset: () => void;
}

const categoryFilterItems = [
    {
        value: '精品鲜花',
        name: 'men',
    },
    {
        value: '生日祝福',
        name: 'women',
    },
    {
        value: '表白求婚',
        name: 'love',
    },
];

const priceFilterItems = [
    {
        value: '从低到高',
        name: 'price',
    },
    {
        value: '从高到低',
        name: '-price'
    },
];

const SearchFilterModal = ({
    onDismissModal,
    onApply,
    initialFilterData,
    onReset,
}: Props) => {
    const [filterData, setFilterData] = useState(initialFilterData);

    const handleChangeFilter = (type: string, val: string) => {
        setFilterData({ ...filterData, [type]: val });
    };

    const handleResetFilter = () => {
        setFilterData({ category: '', sort: '' });
        onDismissModal();
        onReset();
    };

    const handleFilterApply = () => {
        onDismissModal();
        onApply(filterData);
    };

    return (
        <Modal
            isVisible={true}
            swipeDirection={'down'}
            style={styles.modal}
            propagateSwipe
            onSwipeComplete={onDismissModal}
            onBackdropPress={onDismissModal}
            onBackButtonPress={onDismissModal}
        >
            <View style={styles.modalContent}>
                <View style={styles.filterItem}>
                    <Text style={styles.title}> 分类 </Text>
                    <SearchFilterSelector
                        data={categoryFilterItems}
                        active={filterData.category ? filterData.category : ''}
                        onPress={(val) => handleChangeFilter('category', val)}
                    />
                </View>
                <View style={styles.filterItem}>
                    <Text style={styles.title}> 价格 </Text>
                    <SearchFilterSelector
                        data={priceFilterItems}
                        active={filterData.sort ? filterData.sort : ''}
                        onPress={(val) => handleChangeFilter('sort', val)}
                    />
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.bottomBtn}
                        onPress={handleResetFilter}
                    >
                        <Text style={styles.bottomText}> 重置 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handleFilterApply}
                        style={styles.bottomBtn}
                    >
                        <Text style={styles.bottomText}> 应用 </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default SearchFilterModal;

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopStartRadius: 24,
        borderTopEndRadius: 24,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    filterItem: {
        marginBottom: 10,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomText: {
        fontSize: 15,
    },
    bottomBtn: {
        padding: 10,
    },
});
