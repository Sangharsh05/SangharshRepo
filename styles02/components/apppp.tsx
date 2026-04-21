import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'

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
                <Text style={styles.username}>{name}</Text>
                <Text style={styles.userstatus}>{status}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingTest:{
        
    },
    container:{

    },
    usercard:{

    },
    userimage:{

    },
    username:{

    },
    userstatus:{

    },
})