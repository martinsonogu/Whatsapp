import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import ChatScreen from './src/components/screens/ChatScreen';
//import IndividualChatScreen from './src/components/screens/IndividualChatScreen';
import Navigator from "./src/components/navigation"


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
