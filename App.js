import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import LandingPageScreen from './app/screens/LandingPageScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LandingPageScreen">
        <Stack.Screen name="LandingPageScreen" component={LandingPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


