import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dummy from "../screens/Dummy"
import ChatScreen from "../screens/ChatScreen"
import {Ionicons, Entypo} from "@expo/vector-icons"



const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {

    return (
    <Tab.Navigator initialRouteName='Chats' 
    screenOptions={{
      tabBarStyle: {backgroundColor: "whitesmoke"},
      headerStyle: {backgroundColor: "whitesmoke"}
    }}
    >
      <Tab.Screen name="Status" component={Dummy} 
      options={{
        tabBarIcon: ({color, size}) => <Ionicons name="logo-whatsapp" size={size} color={color}/>
      }}/>
      <Tab.Screen name="Calls" component={Dummy} 
      options={{
        tabBarIcon: ({color, size}) => <Ionicons name="call-outline" size={size} color={color}/>
      }}
      />
      <Tab.Screen name="Camera" component={Dummy} 
      options={{
        tabBarIcon: ({color, size}) => <Ionicons name="camera-outline" size={size} color={color}/>
      }}
      />
      <Tab.Screen name="Chats" component={ChatScreen} 
      options={({navigation}) => ({
        tabBarIcon: ({color, size}) => (
        <Ionicons name="ios-chatbubbles-sharp" size={size} color={color}/>
        ),
        headerRight: ({color}) => (
          <Entypo 
          onPress={() => navigation.navigate('Contacts')}
          name="new-message"
          size={18}
          color={'royalblue'}
          style={{marginRight: 15}}
          />)
      })}
      />
      <Tab.Screen name="Settings" component={Dummy} 
      options={{
        tabBarIcon: ({color, size}) => <Ionicons name="settings-outline" size={size} color={color}/>
      }}
      />
    </Tab.Navigator>
    )
}

export default MainTabNavigator