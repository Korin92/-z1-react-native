import React from 'react'
import {ApolloProvider} from '@apollo/client'
import client from './src/adapters/apollo/apolloClient'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/ui/pages/home/Home'

const Stack = createStackNavigator()

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App
