import React from 'react';
import { Text, View, TextInput, Button, Image, StatusBar } from 'react-native';
import styles from './LoginStyle';
import Button2 from '../Components/Button';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';


const Login = ({navigation}: any) => {
    const goToPage = (path: any) => {
        navigation.navigate(path);
    }

    const [fontsLoaded,fontError] = useFonts({
      'Benguiat': require('../../../assets/fonts/Benguiat.ttf'),
      'Aachen': require('../../../assets/fonts/Aachen.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded, fontError]);
  
    if (!fontsLoaded && !fontError) {
      return null;
    }

  return ( 
    
      <View style={styles.container} onLayout={onLayoutRootView}>
        <View style={styles.logo}>
        <Image style={{width:400, height: 400, resizeMode: 'contain'}} source={require('../../../assets/images/pngegg.png')}/>
        </View>
        <Text style={[styles.setTextColor, {fontFamily: 'Benguiat'}]}>Login</Text>
        <TextInput style={[styles.input, {fontFamily: 'Benguiat'}]}/>
        <Text style={[styles.setTextColor, {fontFamily: 'Benguiat'}]}>Password</Text>
        <TextInput secureTextEntry={true} style={[styles.input, {fontFamily: 'Benguiat'}]}/>
        <View style={styles.createForgotLink}>
          <Text onPress={()=> (goToPage("CreateAccount"))} style={[styles.link,{fontFamily: 'Benguiat'}]}>Create Account</Text>
          <Text onPress={()=> (goToPage("ForgotPassword"))} style={[styles.link,{fontFamily: 'Benguiat'}]}>Forgot Password</Text> 
        </View>
        <Button2 onPress={()=> (goToPage("Home"))} labelButton="Entrar"></Button2>
        <StatusBar barStyle={'light-content'}/>
      </View>

  )
}

export default Login