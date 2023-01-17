import {  FlatList, StyleSheet } from 'react-native';
import chats from '../../assets/data/chats.json'
import ChartListItem from '../ChatListItem'

const ChatScreen  = () => {
  return (
    <FlatList
    data={chats}
    renderItem={( {item} ) =>
      <ChartListItem chat={item}/>
    }
    style={{backgroundColor: "white"}}
    />
  )
}

export default ChatScreen 

