import { StackNavigationProp } from '@react-navigation/stack'
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import { RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
    Home: { categoryId: string | null }
    Detail: { id: string }
    PlayerDetail: undefined
}

export type TabNavParamList = {
    [key: string]: { categoryId: string | null } | undefined
}

export type HomeScreenProps = MaterialTopTabScreenProps<TabNavParamList, string>
export type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>
export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>
