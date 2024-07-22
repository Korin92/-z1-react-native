import React from 'react'
import {ApolloProvider} from '@apollo/client'
import client from './src/adapters/apollo/apolloClient'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/ui/pages/home/Home'
import {globalStyles} from './src/styles/globalStyles'
import {View} from 'react-native'
import {background} from './src/styles/colors'

const Stack = createStackNavigator()

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <View style={globalStyles.container}>
        <NavigationContainer>
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
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ApolloProvider>
  )
}

export default App
