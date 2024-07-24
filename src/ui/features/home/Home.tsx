import React, { useCallback } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Card } from '../../components/Card.tsx'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { DetailScreenNavigationProp, TabNavParamList } from '../../../navigation/types.ts'
import { ItemService } from '../../../services/items/domain/services/item-service.ts'
import { Item } from '../../../services/items/domain/entities/Item.ts'
import { FlashList } from '@shopify/flash-list'
import { ItemByCategoryService } from '../../../services/items/domain/services/item-by-category-service.ts'

type HomeProps = {
    route: RouteProp<TabNavParamList, keyof TabNavParamList>
}

export const Home: React.FC<HomeProps> = ({ route }) => {
    const navigation = useNavigation<DetailScreenNavigationProp>()
    const { categoryId } = route?.params || { categoryId: null }
    const { loading, error, items } = categoryId ? ItemByCategoryService(categoryId) : ItemService()
    const isColumnLayout = route.name === 'All'
    const numColumns = isColumnLayout ? 2 : 1

    const handlePress = useCallback(
        (id: string) => {
            navigation.navigate('Detail', { id })
        },
        [navigation],
    )

    const renderItem = useCallback(
        ({ item }: { item: Item }) => (
            <Card
                title={item.title}
                author={item.author}
                image={item.image}
                type={item.category.title}
                layout={isColumnLayout ? 'column' : 'row'}
                onPress={() => handlePress(item.id)}
            />
        ),
        [handlePress, isColumnLayout],
    )

    if (loading) return <ActivityIndicator />
    if (error) return <Text>Error: {error.message}</Text>

    return (
        <View style={styles.container}>
            <FlashList
                data={items}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                renderItem={renderItem}
                estimatedItemSize={200}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})
