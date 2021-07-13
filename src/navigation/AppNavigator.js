import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import TeamIcon from '../components/TeamIcon'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen'
import PokemonScreen from '../screens/PokemonScreen'
import TeamScreen from '../screens/TeamScreen'

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home-variant-outline' : 'home-variant-outline';
                break;
              case 'Pokémon':
                iconName = focused ? 'pokeball' : 'pokeball';
                break;
              case 'Team':
                iconName = focused ? 'account-group' : 'account-group';
                break;
              default:
              // iconName = focused ? 'ios-desktop' : 'ios-desktop-outline'
                break;
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'lightgrey',
          labelStyle: {
            fontSize: 15
          },
          style: {
            backgroundColor: '#303030',
            paddingTop: 10,
            paddingBottom: 5,
            flex: 0.07,
          }
        }}>
        <Tab.Screen
          name='Home' 
          component={HomeScreen} 
        />
        <Tab.Screen
          name='Pokémon'
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