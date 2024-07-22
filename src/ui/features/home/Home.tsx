// src/ui/screens/Home/HomeScreen.tsx
import React from 'react'
import {View, Text, ActivityIndicator, StyleSheet, FlatList} from 'react-native'
import {ItemService} from '../../../core/domain/services/ItemService.ts'
import {Card} from '../../components/Card.tsx'

export const Home = () => {
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
