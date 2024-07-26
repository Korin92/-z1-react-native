import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { background } from '../styles/colors.ts'
import DetailScreen from '../ui/pages/detail/detail.tsx'
import { TabNavigator } from './tab-navigator.tsx'
import { BackButtonNavigation } from '../ui/components/back-button-navigation/back-button-navigation.tsx'
import PlayerDetailScreen from '../ui/pages/player-detail/player-detail.tsx'
import { ROUTE_DETAIL, ROUTE_HOME, ROUTE_PLAYER_DETAIL } from './route-constants.ts'

const Stack = createStackNavigator()

export default function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={ROUTE_HOME}
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
            <Stack.Screen name={ROUTE_HOME} component={TabNavigator} />
            <Stack.Screen
                name={ROUTE_DETAIL}
                component={DetailScreen}
                options={{
                    gestureDirection: 'vertical',
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    headerLeft: () => <BackButtonNavigation />,
                }}
            />
            <Stack.Screen
                name={ROUTE_PLAYER_DETAIL}
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
