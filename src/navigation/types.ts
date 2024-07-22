import {RouteProp} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  Detail: {id: string}
}

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>
export type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>
