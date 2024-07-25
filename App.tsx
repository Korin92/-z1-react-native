import React, { useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './src/apollo/apollo-client'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import StackNavigator from './src/navigation/stack-navigator'
import { background } from './src/styles/colors'
import TrackPlayer from 'react-native-track-player'
import './src/i18n'

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: background,
    },
}

function App(): React.JSX.Element {
    useEffect(() => {
        TrackPlayer.setupPlayer().then(() => {
            console.log('player ready')
        })
    }, [])

    return (
        <ApolloProvider client={client}>
            <StatusBar backgroundColor={background} barStyle="light-content" />
            <NavigationContainer theme={MyTheme}>
                <StackNavigator />
            </NavigationContainer>
        </ApolloProvider>
    )
}

export default App
