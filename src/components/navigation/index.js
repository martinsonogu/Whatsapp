import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import IndividualChatScreen from '../screens/IndividualChatScreen'
import ChatScreen from '../screens/ChatScreen'

const Navigator = () => {
    const Stack = createNativeStackNavigator()
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chats" component= {ChatScreen}/>
        <Stack.Screen name="Chat" component= {IndividualChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator