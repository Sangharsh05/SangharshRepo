import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View >
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardelevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardelevated]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card,styles.cardelevated]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card,styles.cardelevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardelevated]}>
          <Text>Right</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,

  },
  container:{
    padding:8
  },
  card:{
    justifyContent:'center',
    alignItems:'center',
    height:100,
    width:100,
    margin:5
  },
  cardelevated:{
    backgroundColor:'#ff0'
  }
})