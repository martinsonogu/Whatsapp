import { StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 
import {SafeAreaView} from "react-native-safe-area-context"

const InputBox = () => {
    const onSend = () => {
        console.warn('sending a new message ')
        setNewMessage("")
    }
    const [newMessage, setNewMessage] = useState('')
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput
      placeholder='message'
      style={styles.input}
      value={newMessage}
      onChangeText={setNewMessage}
      />
      <MaterialIcons onPress={onSend } style={styles.send} name="send" size={18} color="white"/>
    </SafeAreaView>
  )
}

export default InputBox

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      backgroundColor: 'whitesmoke',
      padding: 5,
      paddingHorizontal: 10,
      alignItems: 'center'
    },
    input:{
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 50,
        paddingHorizontal: 10,
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
        fontSize: 16,
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden',
    }
})