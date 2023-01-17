import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 

const InputBox = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput
      placeholder='message'
      style={styles.input}
      />
      <MaterialIcons style={styles.send} name="send" size={18} color="white"/>
    </View>
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