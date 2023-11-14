import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const Button2 = ({labelButton, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>{labelButton}</Text>
    </TouchableOpacity>
  )
}

export default Button2

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DCDCDC',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginHorizontal: 55,
        marginVertical: 10,
        height: 35
    }
    }
);