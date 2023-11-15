import React from 'react'
import { Text, TextInput, Button, View, ScrollView} from 'react-native'
import styles from './CreateAccountStyle';
import { Card } from 'react-native-elements';
import Button2 from '../Components/Button';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';


const CreateAccount = ({navigation}: any) => {
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
          <Text style={[styles.setTextColor, {fontFamily:'Benguiat'}]}>Nome:</Text>
          <TextInput style={[styles.input, {fontFamily:'Benguiat'}]}/>
          <Text style={[styles.setTextColor, {fontFamily:'Benguiat'}]}>Email:</Text>
          <TextInput style={[styles.input, {fontFamily:'Benguiat'}]}/>
          <Text style={[styles.setTextColor, {fontFamily:'Benguiat'}]}>Senha:</Text>
          <TextInput style={[styles.input, {fontFamily:'Benguiat'}]}/>
          <Text style={[styles.setTextColor, {fontFamily:'Benguiat'}]}>Confirmar Senha:</Text>
          <TextInput style={[styles.input, {fontFamily:'Benguiat'}]}/>
          <Button2 onPress={()=> (goToPage("Login"))} labelButton="Criar Conta"></Button2>
      </View>
  )
}

export default CreateAccount