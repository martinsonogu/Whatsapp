import {Text, View ,Image, StyleSheet} from 'react-native'

const ChartListItem = () => {
  return (
    <View style={styles.container}>
        <Image
        source={{
            uri:"https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=800"
        }}
        style={styles.proPic}
        />
        <View style={styles.content}>
        <View style={styles.row}>
                <Text numberOfLines={1} style={styles.name}>Omo </Text>
                <Text style={styles.subTitle}>6:00am</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle} > You don see the money?</Text>
        </View>
       
  
    </View>
    )
}

export default ChartListItem
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgrey',
    },
    row: {
        flexDirection: 'row',
        marginBottom:5,
    },
    name: {
        flex: 1, 
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'grey',
    }
  });