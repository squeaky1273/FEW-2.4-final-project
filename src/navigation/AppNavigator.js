import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import TeamIcon from '../components/TeamIcon'

import HomeScreen from '../screens/HomeScreen'
import PokemonScreen from '../screens/PokemonScreen'
import TeamScreen from '../screens/TeamScreen'

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home' 
          component={HomeScreen} 
        />
        <Tab.Screen
          name='Pokemon'
          component={PokemonScreen}
        />
        <Tab.Screen
          name='Team'
          component={TeamScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator