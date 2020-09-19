import React from 'react';
import MovieDetailScreen from './screens/MovieDetail'
import MovieListScreen from './screens/MovieList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            
          }
        }
      >
        <Stack.Screen
          name="MovieList"
          options={
            {
              title:"Movie Lists"
            }
          }
          component={MovieListScreen}
        />
        <Stack.Screen
          name="MovieDetail"
          options={
            {
              title:"Movie details", 
              headerTruncatedBackTitle: null,
            }
          }
          component={MovieDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

