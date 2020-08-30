import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './src/components/Botao'


export default function App() {
  const [display, setDisplay] = useState('0')
  const [lastPress, setLastPress] = useState('')

  const isOperation = text => {
    return ['+', '-', '*', '÷'].includes(text)
  }
  const handlePress = text => {
    if (text === 'AC') {
      setDisplay('0')
      setLastPress('')
      return
    }

    if (isOperation(text)) {
      if (lastPress === text) return
      setLastPress(text)
      return
    }

    if (display + lastPress === '0') return setDisplay(text)


    setDisplay(display + lastPress)
    setLastPress(text)
  }
  const pressEqual = () => {
    const calc = (display + lastPress).replace('÷', '/')
    const result = Number.isInteger(eval(calc))
      ? eval(calc)
      : eval(calc).toFixed(2)

    setLastPress('')
    setDisplay(`${result}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display + lastPress}</Text>
      </View>
      <View style={styles.rowButton}>
        <Botao text='AC' onPress={handlePress} triple />
        <Botao text='÷' operation onPress={handlePress} />
      </View>
      <View style={styles.rowButton}>
        <Botao text='7' onPress={handlePress} />
        <Botao text='8' onPress={handlePress} />
        <Botao text='9' onPress={handlePress} />
        <Botao text='*' operation onPress={handlePress} />
      </View>
      <View style={styles.rowButton}>
        <Botao text='4' onPress={handlePress} />
        <Botao text='5' onPress={handlePress} />
        <Botao text='6' onPress={handlePress} />
        <Botao text='-' operation onPress={handlePress} />
      </View>
      <View style={styles.rowButton}>
        <Botao text='1' onPress={handlePress} />
        <Botao text='2' onPress={handlePress} />
        <Botao text='3' onPress={handlePress} />
        <Botao text='+' operation onPress={handlePress} />
      </View>
      <View style={styles.rowButton}>
        <Botao text='0' onPress={handlePress} double />
        <Botao text='.' onPress={handlePress} />
        <Botao text='=' operation onPress={pressEqual} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  display: {
    flex: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  displayText: {
    fontSize: 40,
    padding: 10
  },
  rowButton: {
    flex: 1,
    flexDirection: 'row'
  }

});
