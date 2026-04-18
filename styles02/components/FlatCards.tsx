import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function FlatCards() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>FlatCards</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardone]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card,styles.cardtwo]}>
                <Text>Green</Text>
            </View>
            <View style={[styles.card,styles.cardthree]}>
                <Text>Blue</Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:28,
        fontWeight:'bold',
        paddingHorizontal:8,

    },
    container:{
        flex:1,
        flexDirection: 'row',
        padding:28,
    },
    card:{
        
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
        borderRadius:4
    },
    cardone:{
        backgroundColor:'#ff0000'
    },
    cardtwo:{
        backgroundColor:'#00ff00'
    },
    cardthree:{
        backgroundColor:'#0000ff'
    }
})