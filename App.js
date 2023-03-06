import { View, Text } from 'react-native'
import React from 'react'
import Login from './Screens/Login'
import Home from './Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component = {Login}/>
        <Stack.Screen name="Home" component = {Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App