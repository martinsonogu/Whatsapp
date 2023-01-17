import { View, Text, ImageBackground, StyleSheet, FlatList, 
  KeyboardAvoidingView, Platform } from 'react-native'
import bg from '../../assets/images/BG.png'
import messages from '../../assets/data/messages.json'
import Message from '../Message/Index'
import InputBox from '../InputBox'


const IndividualChatScreen = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.imageBG}
    >
    <ImageBackground source={bg} style={styles.imageBG}>
      <FlatList
      data={messages}
      renderItem={({item})  => <Message message={item}/>}
      style={styles.list} inverted
      />
      <InputBox/>
    </ImageBackground>
    </KeyboardAvoidingView>
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