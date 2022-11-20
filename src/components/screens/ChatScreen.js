import {  FlatList } from 'react-native';
import chats from '../../assets/data/chats.json'
import ChartListItem from '../ChatListItem'

const ChatScreen  = () => {
  return (
    <FlatList
    data={chats}
    renderItem={( {item} ) =>
      <ChartListItem chat={item}/>
    }
    />
  )
}

export default ChatScreen 