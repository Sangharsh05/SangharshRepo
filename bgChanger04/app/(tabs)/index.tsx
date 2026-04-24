import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const [randomBackground, setRandomBackground] = useState("#fff");

  const [circleColors, setCircleColors] = useState({
    tl: "#FF0000",
    tr: "#00FF00",
    bl: "#0000FF",
    br: "#FFFF00"
  });

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeBackground = () => {
    setRandomBackground(generateColor());
  };

  const changeCircleColor = (key: "tl" | "tr" | "bl" | "br") => {
    setCircleColors(prev => ({
      ...prev,
      [key]: generateColor()
    }));
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>

        {/* Top Left */}
        <TouchableOpacity
          style={[styles.circle, styles.topLeft, { backgroundColor: circleColors.tl }]}
          onPress={() => changeCircleColor("tl")}
        />

        {/* Top Right */}
        <TouchableOpacity
          style={[styles.circle, styles.topRight, { backgroundColor: circleColors.tr }]}
          onPress={() => changeCircleColor("tr")}
        />

        {/* Bottom Left */}
        <TouchableOpacity
          style={[styles.circle, styles.bottomLeft, { backgroundColor: circleColors.bl }]}
          onPress={() => changeCircleColor("bl")}
        />

        {/* Bottom Right */}
        <TouchableOpacity
          style={[styles.circle, styles.bottomRight, { backgroundColor: circleColors.br }]}
          onPress={() => changeCircleColor("br")}
        />

        {/* Center Button */}
        <TouchableOpacity onPress={changeBackground}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B40',
    paddingVertical: 10,
    paddingHorizontal: 40
  },

  actionBtnTxt: {
    fontSize: 24,
    color: '#fff',
    textTransform: 'uppercase'
  },

  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'absolute'
  },

  topLeft: {
    top: 40,
    left: 20
  },

  topRight: {
    top: 40,
    right: 20
  },

  bottomLeft: {
    bottom: 40,
    left: 20
  },

  bottomRight: {
    bottom: 40,
    right: 20
  }
});