import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChartListItem from './src/components/ChatListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ChartListItem/>
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
