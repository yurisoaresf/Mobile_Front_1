import React from 'react'
import { Text, TextInput, Button, View, ScrollView} from 'react-native'
import styles from './CreateAccountStyle';
import { Card } from 'react-native-elements';
import Button2 from '../Components/Button';


const CreateAccount = ({navigation}: any) => {
  const goToPage = (path: any) => {
    navigation.navigate(path);
}
  return (

      <View style={styles.container}>
          <Text style={styles.setTextColor}>Nome:</Text>
          <TextInput style={styles.input}/>
          <Text style={styles.setTextColor}>Email:</Text>
          <TextInput style={styles.input}/>
          <Text style={styles.setTextColor}>Senha:</Text>
          <TextInput style={styles.input}/>
          <Text style={styles.setTextColor}>Confirmar Senha:</Text>
          <TextInput style={styles.input}/>
          <Button2 onPress={()=> (goToPage("Login"))} labelButton="Criar Conta"></Button2>
      </View>
  )
}

export default CreateAccount