import {Text ,Image, View, StyleSheet, Pressable} from 'react-native'
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import {useNavigation} from "@react-navigation/native"
dayjs.extend(relativeTime); 

const ContactListItem = ({user}) => {
    const navigation = useNavigation();
  return (
    <Pressable onPress={() => {}} style={styles.container}>
        <Image
        source={{uri: user.image}}
        style={styles.proPic}
        />
        <View style={styles.content}>
            <Text numberOfLines={1} style={styles.name}>{user.name} </Text>
            <Text numberOfLines={2} style={styles.subTitle} >{user.status}</Text>
        </View>
                
                
    </Pressable>
    )
}

export default ContactListItem
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
       marginHorizontal: 10,
       marginVertical: 5,
       height: 70,
    },
    proPic: {
      width: 60,
      height: 60,
      borderRadius:30, 
      marginRight: 10, 
    },
    content: {
        flex:1,
        borderBottomWidth: StyleSheet.hairlineWidth ,
        borderBottomColor: 'lightgrey',
    },
    name: {
        //flex: 1, 
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'grey',
    }
   
  });