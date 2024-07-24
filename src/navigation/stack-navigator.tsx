import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { background } from '../styles/colors.ts'
import DetailScreen from '../ui/pages/detail/Detail.tsx'
import { TabNavigator } from './tab-navigator.tsx'
import { BackButtonNavigation } from '../ui/components/back-button-navigation/back-button-navigation.tsx'
import PlayerDetailScreen from '../ui/pages/player-detail/player-detail.tsx'

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
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    gestureDirection: 'vertical',
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    headerLeft: () => <BackButtonNavigation />,
                }}
            />
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen
                name="PlayerDetail"
                component={PlayerDetailScreen}
                options={{
                    gestureDirection: 'vertical',
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    headerLeft: () => <BackButtonNavigation />,
                }}
            />
        </Stack.Navigator>
    )
}
