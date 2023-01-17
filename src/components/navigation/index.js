import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import IndividualChatScreen from '../screens/IndividualChatScreen'
import MainTabNavigator from './MainTabNavigator'
import ContactsScreen from '../screens/ContactsScreen'

const Navigator = () => {
    const Stack = createNativeStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: 'whitesmoke'}
      }}>
        <Stack.Screen name="Home" component= {MainTabNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="Chat" component= {IndividualChatScreen}/>
        <Stack.Screen name="Contacts" component= {ContactsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator