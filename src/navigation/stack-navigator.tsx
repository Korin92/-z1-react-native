import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { background } from '../styles/colors.ts'
import DetailScreen from '../ui/pages/detail/Detail.tsx'
import { TabNavigator } from './tab-navigator.tsx'

const Stack = createStackNavigator()

export default function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitle: 'Learn',
                headerTintColor: 'white',
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontFamily: 'RobotoSlab-Black',
                    fontSize: 24,
                },
                headerStyle: {
                    backgroundColor: background,
                },
                cardStyle: {
                    backgroundColor: background,
                },
            }}>
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Home" component={TabNavigator} />
        </Stack.Navigator>
    )
}
