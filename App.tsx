import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, TextInput, Button, Image, StatusBar } from 'react-native';
import Login from './src/pages/login/Login';
import CreateAccount from './src/pages/CreateAccount/CreateAccount';
import ForgotPassword from './src/pages/ForgotPassword/ForgotPassword';
import Home from './src/pages/Home/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import WishList from './src/pages/WishList/WishList';
import MovieDetails from './src/pages/movieDetails/MovieDetails';

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}></Stack.Screen>
        <Stack.Screen options={({navigation}) => {
          return{
            headerBackVisible: false, 
            headerTitleAlign:"center", 
            title:"Geek Filmes", 
            headerRight: () => (
              <>
                <Icon onPress={() => (navigation.navigate("WishList"))} name="star" size={20} style={{marginLeft:"20%",marginRight:"10%"}}></Icon>
                <Text onPress={() => (navigation.navigate("Login"))} style={{marginLeft:"15%",marginRight:"1%"}}>Sair</Text>
              </> 
          )
        }
      }} name="Home" component={Home}></Stack.Screen>
        <Stack.Screen options={{title: "Create Account", headerTintColor:"#000000", headerTitleAlign:"center"}} name="CreateAccount" component={CreateAccount}></Stack.Screen>
        <Stack.Screen options={{title: "Forgot Password", headerTintColor:"#000000", headerTitleAlign:"center"}} name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen options={{title: "Wishlist", headerTintColor:"#000000", headerBackTitleVisible: false, headerBackVisible: true}} name="WishList" component={WishList}></Stack.Screen>
        <Stack.Screen options={{title: "Movie Details", headerTintColor:"#000000", headerBackTitleVisible: false, headerBackVisible: true}} name="MovieDetails" component={MovieDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;
