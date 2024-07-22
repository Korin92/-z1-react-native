import React from 'react'
import {Text, View} from 'react-native'

type DetailProps = {
  id: string
}

export const Detail: React.FC<DetailProps> = ({id}) => {
  return (
    <View>
      <Text>Detail{id}</Text>
    </View>
  )
}
