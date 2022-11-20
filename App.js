import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './src/components/screens/ChatScreen';
import IndividualChatScreen from './src/components/screens/IndividualChatScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <IndividualChatScreen/>
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
