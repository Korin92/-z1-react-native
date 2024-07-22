import {View, Text, ActivityIndicator} from 'react-native'
import {useQuery} from '@apollo/client'
import {GET_ITEMS} from '../../../adapters/graphql/queries/GET_ITEMS.ts'

export const Home = () => {
  const {loading, error, data} = useQuery(GET_ITEMS)

  if (loading) return <ActivityIndicator />
  if (error) return <Text>Error: {error.message}</Text>

  return (
    <View>
      {data.items.map((item: {id: string; title: string}) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  )
}
