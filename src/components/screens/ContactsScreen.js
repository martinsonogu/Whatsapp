 import { FlatList } from 'react-native'
 import React from 'react'
 import users from '../../assets/data/users.json'
 import ContactListItem from '../ContactListItem'
 
 const ContactsScreen = () => {
   return (
    <FlatList
    data={users}
    renderItem={( {item} ) =>
      <ContactListItem user={item.user}/>
    }
    style={{backgroundColor: "white"}}
    />
   )
 }
 
 export default ContactsScreen