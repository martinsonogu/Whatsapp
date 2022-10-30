import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChartListItem from './src/components/ChatListItem';

const chat ={
  id: '1',
  user:{
    image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Omo'
  },
  lastMessage:{
    text: 'Hello',
    createdAt:'07:30',
  }


}
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ChartListItem chat={chat}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
