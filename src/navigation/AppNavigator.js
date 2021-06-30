import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import TeamIcon from '../components/TeamIcon'

// import HomeScreen from './src/screens/HomeScreen'
import PokemonScreen from '../screens/PokemonScreen'
import TeamScreen from '../screens/TeamScreen'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name='Pokemon'
            component={PokemonScreen}
            options={{ headerRight: props => <TeamIcon {...props} /> }}
        />
        <Stack.Screen name='Team' component={TeamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator