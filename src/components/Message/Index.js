import { View, Text, StyleSheet } from 'react-native'
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime); 

const Message = ({message}) => {
const isMyMessage = () => {
    return message.user.id === 'u1';
}

  return (
    <View style={[styles.container, {
        backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
        alignSelf: isMyMessage() ? 'flex-end':'flex-start',
    }]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow()}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
     container: {
        //backgroundColor: '#fff',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        //alignSelf: 'flex-start',
        maxWidth: '80%',
     },
     time:{
        color: 'grey',
        alignSelf: 'flex-end',
     },
})