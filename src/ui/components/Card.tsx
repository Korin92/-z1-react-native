import React, {useState} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

interface CardProps {
  title: string
  author: string
  image: string
  type: string
  layout: 'row' | 'column'
}

const fallbackImage =
  'https://via.placeholder.com/180/808080/000000?text=No+Image+Available'

export const Card: React.FC<CardProps> = ({
  title,
  author,
  image,
  type,
  layout,
}) => {
  const [imageUri, setImageUri] = useState(image)
  return (
    <View
      style={[
        styles.card,
        layout === 'row' ? styles.rowLayout : styles.columnLayout,
      ]}>
      <Image
        source={{uri: imageUri}}
        style={layout === 'row' ? styles.imageRow : styles.imageColumn}
        onError={() => setImageUri(fallbackImage)}
      />
      <View style={styles.textContainer}>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    flex: 1,
  },
  rowLayout: {
    flexDirection: 'row',
  },
  columnLayout: {
    flexDirection: 'column',
  },
  imageRow: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  imageColumn: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },
  type: {
    fontSize: 12,
    color: 'black',
  },
})
