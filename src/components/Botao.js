import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default props => {
  const stylesButton = [styles.botao]
  const stylesButtonText = [styles.botaoText]

  if (props.operation) {
    stylesButton.push(styles.operation)
    stylesButtonText.push(styles.operationText)
  }
  if (props.triple) stylesButton.push(styles.triple)
  if (props.double) stylesButton.push(styles.double)
  return (
    <TouchableOpacity style={stylesButton} onPress={() => props.onPress(props.text)}>
      <Text style={stylesButtonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botao: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  operation: {
    backgroundColor: '#e67e22',
  },
  operationText: {
    color: 'white',
    fontSize: 30
  },
  triple: {
    flex: 3
  },
  double: {
    flex: 2
  }

})