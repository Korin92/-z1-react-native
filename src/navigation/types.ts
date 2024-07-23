import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
    Home: { categoryId: string | null }
    Detail: { id: string }
}

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>
export type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>
