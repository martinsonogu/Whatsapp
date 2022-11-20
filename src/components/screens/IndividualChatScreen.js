import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'
import bg from '../../assets/images/BG.png'
import messages from '../../assets/data/messages.json'
import Message from '../Message/Index'


const IndividualChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.imageBG}>
      <FlatList
      data={messages}
      renderItem={({item})  => <Message message={item}/>}
      style={styles.list} inverted
      />
    </ImageBackground>
  )
}

export default IndividualChatScreen

const styles = StyleSheet.create({
    imageBG:{
        flex:1,
    },
    list:{
        padding:10,
    }
})