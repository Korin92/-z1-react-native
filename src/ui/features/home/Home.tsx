import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native'
import { Card } from '../../components/Card.tsx'
import { useNavigation } from '@react-navigation/native'
import { DetailScreenNavigationProp, HomeScreenRouteProp } from '../../../navigation/types.ts'
import { ItemService } from '../../../services/items/domain/services/item-service.ts'
import { filterItemsByCategory } from '../../../utils/filters-item-by-category.ts'

interface HomeProps {
    route: HomeScreenRouteProp
}

export const Home: React.FC<HomeProps> = ({ route }) => {
    const navigation = useNavigation<DetailScreenNavigationProp>()
    const { categoryId } = route?.params || { categoryId: null }
    console.log('categoryId', categoryId)
    const { loading, error, items } = ItemService()

    if (loading) return <ActivityIndicator />
    if (error) return <Text>Error: {error.message}</Text>

    const itemsByCategory = filterItemsByCategory(items, categoryId)

    console.log('itemsByCategory', itemsByCategory.length)

    return (
        <View style={styles.container}>
            <FlatList
                data={itemsByCategory}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        author={item.author}
                        image={item.image}
                        type={item.category.title}
                        layout={2 ? 'column' : 'row'}
                        onPress={() => navigation.navigate('Detail', { id: item.id })}
                    />
                )}
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
