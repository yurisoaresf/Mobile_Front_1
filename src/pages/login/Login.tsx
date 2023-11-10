import React from 'react';
import { Text, View, TextInput, Button, Image, StatusBar } from 'react-native';
import styles from './LoginStyle';

const Login = ({navigation}) => {
    const goToPage = (path) => {
        navigation.navigate(path);
    }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
      <Image source={require('./assets/logo.png')}/>
      </View>
      <Text style={styles.setTextColor}>Login</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.setTextColor}>Password</Text>
      <TextInput secureTextEntry={true} style={styles.input}/>
      <View style={styles.createForgotLink}>
        <Text onPress={()=> (goToPage("CreateAccount"))} style={styles.link}>Create Account</Text>
        <Text onPress={()=> (goToPage("ForgotPassword"))} style={styles.link}>Forgot Password</Text> 
      </View>
      <Button onPress={()=> (goToPage("Home"))} title="Entrar"></Button>
      <StatusBar barStyle={'light-content'}/>
    </View>
  )
}

export default Login