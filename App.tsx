import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './src/apollo/apollo-client'
import { NavigationContainer } from '@react-navigation/native'
import { globalStyles } from './src/styles/global-styles'
import { View } from 'react-native'
import StackNavigator from './src/navigation/stack-navigator'

function App(): React.JSX.Element {
    return (
        <ApolloProvider client={client}>
            <View style={globalStyles.container}>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
            </View>
        </ApolloProvider>
    )
}

export default App
