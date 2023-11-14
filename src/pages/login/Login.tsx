import React from 'react';
import { Text, View, TextInput, Button, Image, StatusBar } from 'react-native';
import styles from './LoginStyle';
import Button2 from '../Components/Button';

const Login = ({navigation}: any) => {
    const goToPage = (path: any) => {
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
      <Button2 onPress={()=> (goToPage("Home"))} labelButton="Entrar"></Button2>
      <StatusBar barStyle={'light-content'}/>
    </View>
  )
}

export default Login