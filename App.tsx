import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, TextInput, Button, Image, StatusBar } from 'react-native';
import Login from './src/pages/login/Login';
import CreateAccount from './src/pages/CreateAccount/CreateAccount';
import ForgotPassword from './src/pages/ForgotPassword/ForgotPassword';
import Home from './src/pages/Home/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import WishList from './src/pages/WishList/WishList';
import { useState } from 'react';

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  const [wishList, setWishList] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}></Stack.Screen>
        <Stack.Screen options={({navigation}) => {
          return{
            headerBackVisible: false, 
            headerTitleAlign:"center", 
            title:"Geek Filmes",
            headerLeft: () => (
              <>
                <Icon2 onPress={() => (navigation.navigate("Login"))} name="logout" size={20} style={{marginLeft:"20%"}}></Icon2>
 
              </> 
          ),
            headerRight: () => (
              <>
                <Icon onPress={() => (navigation.navigate("WishList", {wishList}))} name="star" size={20} style={{marginLeft:"20%"}}></Icon>
              </> 
          )
        }
      }} name="Home">
        {
          () => (
            <Home wishList={wishList} setWishList={setWishList}></Home>
          )
        }

      </Stack.Screen>
        <Stack.Screen options={{title: "Create Account", headerTintColor:"#000000", headerTitleAlign:"center"}} name="CreateAccount" component={CreateAccount}></Stack.Screen>
        <Stack.Screen options={{title: "Forgot Password", headerTintColor:"#000000", headerTitleAlign:"center"}} name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen options={{title: "Wishlist", headerTintColor:"#000000", headerBackTitleVisible: false, headerBackVisible: true}} name="WishList" component={WishList}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;
