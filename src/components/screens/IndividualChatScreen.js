import {ImageBackground, StyleSheet, FlatList, 
  KeyboardAvoidingView, Platform } from 'react-native'
import bg from '../../assets/images/BG.png'
import messages from '../../assets/data/messages.json'
import Message from '../Message/Index'
import InputBox from '../InputBox'
import {useRoute, useNavigation} from "@react-navigation/native"
import {useEffect} from 'react'

const IndividualChatScreen = () => {
  const navigation = useNavigation(); 
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({title : route.params.name}) 
  }, [route.params.name])
  
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
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