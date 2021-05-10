import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from './card';
import { CategoryProps } from './types';

const Category = () => {
    const [category] = React.useState<CategoryProps[]>([
        {
            id: 1,
            isSelected: true,
            onPress: () => onCategoryChange(),
            title: 'My Day'
        },
        {
            id: 2,
            isSelected: false,
            onPress: () => onCategoryChange(),
            title: 'Important'
        },
        {
            id: 3,
            isSelected: false,
            onPress: () => onCategoryChange(),
            title: 'Personal '
        },
        {
            id: 4,
            isSelected: false,
            onPress: () => onCategoryChange(),
            title: 'Category 04'
        },
        {
            id: 5,
            isSelected: false,
            onPress: () => onCategoryChange(),
            title: 'Category 05'
        },
        {
            id: 6,
            isSelected: false,
            onPress: () => onCategoryChange(),
            title: 'Category 06'
        },
        {
            id: 7,
            isSelected: false,
            onPress: () => onCategoryChange(),
            title: 'Category 07'
        }
    ])
    const [selectedCategoryID, setSelectedCategoryID] = React.useState<number>(1)
    const onCategoryChange = () => {

    }
    return (
        <FlatList
            contentContainerStyle={{height: 50}}
            horizontal
            extraData={(f:any) => f.id}
            data={category}
            renderItem={({ item }) => (
                <Card
                    id={item.id}
                    title={item.title}
                    isSelected={selectedCategoryID===item.id}
                    onPress={()=>setSelectedCategoryID(item.id)}
                    key={item.id}
                />
            )}
        />
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});