import React, { useState } from "react";

import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';

import Toast from 'react-native-toast-message';

export default function App() {
  const [isCross, setIsCross] = useState(false)
  const [gameWinner, setGameWinner] = useState('')
  const [gameState, setGameState] = useState(new Array(9).fill('empty'))

  const reloadGame = () => {
    setIsCross(false)
    setGameWinner('')
    setGameState(new Array(9).fill('empty'))
  }

  const checkIsWinner = (state: string[]) => {
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ){
      setGameWinner(`${gameState[0]} won the game!`)
    } else if(
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[3] === gameState[5]
    ){
      setGameWinner(`${gameState[3]} won the game!`)
    } else if(
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[6] === gameState[8]
    ){
      setGameWinner(`${gameState[6]} won the game!`)
    } else if(
      gameState[0] === gameState[3] &&
      gameState[0] === gameState[6] &&
      gameState[0] !== 'empty'
    ){
      setGameWinner(`${gameState[0]} won the game!`)
    } else if(
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[1] === gameState[7]
    ){
      setGameWinner(`${gameState[1]} won the game!`)
    } else if(
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[2] === gameState[8]
    ){
      setGameWinner(`${gameState[2]} won the game!`)
    } else if(
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[0] === gameState[8]
    ){
      setGameWinner(`${gameState[0]} won the game!`)
    } else if(
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[2] === gameState[6]
    ){
      setGameWinner(`${gameState[2]} won the game!`)
    }
  }

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner){
      return Toast.show({
        type: 'success',
        text1: gameWinner,
      })
    }

    if (gameState[itemNumber] === 'empty'){
      const newGameState = [...gameState];
      newGameState[itemNumber] = isCross ? 'cross' : 'circle';
      setGameState(newGameState);
      setIsCross(!isCross);
      checkIsWinner(newGameState);
    } else{
      return Toast.show({
        type: 'error',
        text1:"Position is already filled",
      })
    }
  }

  return(
    <SafeAreaView>
      <StatusBar/>
      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{gameWinner}</Text>
        </View>
      ) : (
        <View
        style={[styles.playerInfo,isCross ? styles.playerX : styles.playerO]}
        >
          <Text style={styles.gameTurnTxt}>
            Player {isCross? "X" : 'O'} 's Turn
          </Text>
        </View>
      )}
      {/* Game Grid */}
      <FlatList
      numColumns={3}
      data={gameState}
      style={styles.grid}
      renderItem={({item, index}) => (
        <Pressable
        key={index}
        style={styles.card}
        onPress={() => onChangeItem(index)}
        >
          <Text style={{ fontSize: 40, color: '#333' }}>
            {item === 'cross' ? 'X' : item === 'circle' ? 'O' : ''}
          </Text>
        </Pressable>
      )}
      />
      <Pressable
      style={styles.gameBtn}
      onPress={reloadGame}
      >
        <Text style={styles.gameBtnTxt}>
          {gameWinner ? 'Start new game' : 'reload the game'}
        </Text>
      </Pressable>
      <Toast />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  playerInfo:{
    height:56,

    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

    borderRadius:4,
    paddingVertical:8,
    marginVertical:12,
    marginHorizontal:14,

    shadowOffset:{
      width:1,
      height:1,
    },
    shadowColor:'#333',
    shadowOpacity:0.2,
    shadowRadius:1.5,
  },
  gameTurnTxt:{
    fontSize:20,
    color:'#fff',
    fontWeight:'600',
  },
  playerX:{
    backgroundColor:'#38cc77',
  },
  playerO:{
    backgroundColor:'#f7cd2e',
  },
  grid:{
    margin:12,
  },
  card:{
    height:100,
    width:'33.33%',

    alignItems:'center',
    justifyContent:'center',

    borderWidth:1,
    borderColor:'#333',
  },
  winnerInfo:{
    borderRadius:8,
    backgroundColor:'#38cc77',

    shadowOpacity:0.1,
  },
  winnerTxt:{
    fontSize:20,
    color:'#fff',
    fontWeight:'600',
    textTransform:'capitalize',
  },
  gameBtn:{
    alignItems:'center',

    padding:10,
    borderRadius:8,
    marginHorizontal:36,
    backgroundColor:'#8d3daf',
  },
  gameBtnTxt:{
    fontSize:18,
    color:'#fff',
    fontWeight:'500',
  },
});