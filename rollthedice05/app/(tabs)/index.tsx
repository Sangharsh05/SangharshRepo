import { StyleSheet, Text, View, ImageSourcePropType, Image, Pressable} from 'react-native'
import type {PropsWithChildren} from 'react';
import React,{useState} from 'react'

const DiceOne = require('../../../assets/images/one.png');
const DiceTwo = require('../../../assets/images/two.png');
const DiceThree = require('../../../assets/images/three.png');
const DiceFour = require('../../../assets/images/four.png');
const DiceFive = require('../../../assets/images/five.png');
const DiceSix = require('../../../assets/images/six.png');

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl} : DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

export default function index() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) +1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable
      onPress={rollDiceOnTap}
      >
        <Text
        style={styles.rollDiceBtnText}
        >
          Roll the dice
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff2f2'
  },
  diceContainer:{
    margin:12,
  },
  diceImage:{
    width:200,
    height:200
  },
  rollDiceBtnText:{
    paddingVertical:10,
    paddingHorizontal:40,
    borderWidth:2,
    borderRadius:8,
    borderColor:'#E5E0FF',
    fontSize:16,
    color:'#8EA7E9',
    fontWeight:'700',
    textTransform:'uppercase',
  }
});