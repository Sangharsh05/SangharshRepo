import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Sangharsh Manwar',
            status: 'Just an extra ordinary student',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Aditya Shivale',
            status: 'Mern Stack student',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Ashwin Jadhav',
            status: 'Data analist',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Abhishek Khopade',
            status: 'Machine Learning',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ]
  return (
    <View>
      <Text style={styles.headingTest}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.usercard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userimage}
                />
                <View>
                    <Text style={styles.username}>{name}</Text>
                    <Text style={styles.userstatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingTest:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        padding:16,
        marginBottom:4
    },
    usercard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8D3DAF',
        padding:8,
        borderRadius:10
    },
    userimage:{
        width:60,
        height:60,
        borderRadius:60 / 2,
        marginRight:14
    },
    username:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff',

    },
    userstatus:{

    },
})