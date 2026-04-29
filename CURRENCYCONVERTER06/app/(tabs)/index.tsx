import React, { useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  FlatList,
  Pressable
} from 'react-native';

// Constants
import { currencyByRupee } from './constants';
import CurrencyButton from './components/CurrencyButton';

type Currency = typeof currencyByRupee[number];

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Alert.alert('Error', 'Enter a value to convert');
    }

    const inputAmount = parseFloat(inputValue);

    if (!isNaN(inputAmount)) {
      const selectedCurrency = currencyByRupee.find(
        item => item.name === targetValue.name
      );

      if (!selectedCurrency) return;

      const convertedValue = inputAmount * selectedCurrency.value;
      const result = `${selectedCurrency.symbol} ${convertedValue.toFixed(2)} 🤑`;

      setResultValue(result);
      setTargetCurrency(selectedCurrency.name);

    } else {
      return Alert.alert('Error', 'Not a valid number to convert');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          
          {/* Result */}
          {resultValue !== '' && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}

          {/* Input */}
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={styles.inputAmountField}
              maxLength={14}
              value={inputValue}
              clearButtonMode="always"
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholder="Enter amount in Rupees"
            />
          </View>

        </View>

        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});