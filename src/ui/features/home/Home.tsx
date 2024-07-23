import React from 'react'
import {View, Text, ActivityIndicator, StyleSheet, FlatList} from 'react-native'
import {Card} from '../../components/Card.tsx'
import {useNavigation} from '@react-navigation/native'
import {DetailScreenNavigationProp} from '../../../navigation/types.ts'
import {ItemService} from '../../../services/items/domain/services/ItemService.ts'

export const Home = () => {
  const navigation = useNavigation<DetailScreenNavigationProp>()
  const {loading, error, items} = ItemService()

  if (loading) return <ActivityIndicator />
  if (error) return <Text>Error: {error.message}</Text>

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => (
          <Card
            title={item.title}
            author={item.author}
            image={item.image}
            type={item.category.title}
            layout={2 ? 'column' : 'row'}
            onPress={() => navigation.navigate('Detail', {id: item.id})}
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
