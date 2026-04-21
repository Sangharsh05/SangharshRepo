import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardelevated]}>
        <Image
        source={{
            uri:'data:image/jpeg;base64,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'
        }}
        style={styles.cardimage} 
        />
        <View style={styles.cardbody}>
            <Text style={styles.cardtitle}>Rajgad Fort</Text>
            <Text style={styles.cardlabel}>Pune City,Pune</Text>
            <Text style={styles.carddescription}>The first capital of swarajya which  was created by Chhatrapati Shivaji Maharaj and later capital shifted to Fort Raigad.</Text>
            <Text style={styles.cardfooter}>45 min away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:4
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16 
    },
    cardelevated:{
        backgroundColor:'#ffff00',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardimage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardbody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardtitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardlabel:{
        color:'#000000',
        fontSize:14,
        marginBottom:6
    },
    carddescription:{
        color:'#242B2E',
        fontSize:12,
        marginBottom:12,
        flexShrink:1,
        marginTop:6
    },
    cardfooter:{
        color:'#000000'
    }
})