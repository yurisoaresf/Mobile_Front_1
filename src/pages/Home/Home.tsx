import React from 'react'
import { ScrollView, Text, View, StatusBar } from 'react-native'
import { Card, Button } from 'react-native-elements'


const movies = [
    {name: "O Senhor dos Anéis: As Duas Torres", directedBy: "Peter Jackson", overview: "Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.", genero: "Aventura/Fantasia", duracao: "3h00min", image:"https://upload.wikimedia.org/wikipedia/pt/5/59/The_Lord_of_the_Rings_The_Two_Towers.jpg"},
    {name: "Harry Potter e a Pedra Filosofal ", genero: "Aventura/Fantasia", duracao: "2h20min", image: "https://musicart.xboxlive.com/7/5dbd5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"},
    {name: "Kill Bill Parte 1", genero: "Ação", duracao: "2h40min", image:"https://upload.wikimedia.org/wikipedia/pt/6/6d/Kill_Bill_poster.jpg"},
    {name: "Donnie Darko", genero: "Terror/Fantasia", duracao: "2h00min", image: "https://m.media-amazon.com/images/I/61LxxiDdhRL._AC_UF894,1000_QL80_.jpg"},
    {name: "O Pianista", genero: "Drama", duracao: "2h40min", image: "https://images.justwatch.com/poster/244658635/s592/o-pianista"},
    {name: "Bastardos Inglórios", genero: "Drama/Guerra", duracao: "2h45min", image: "https://br.web.img2.acsta.net/medias/nmedia/18/90/43/36/20096333.jpg"}
]

const Home = ({navigation}) => {
    const goToPage = (path) => {
        navigation.navigate(path);
    }
  return (
    <ScrollView>
        {
        movies.map((movie, i) => {
            return(
                <Card key={i}>
                    <Card.Title>{movie.name}</Card.Title>
                    <Card.Divider/>
                    <Card.Image style={{resizeMode:'contain', width: 200, height: 300, margin:'auto'}} onPress={() => (navigation.navigate("MovieDetails",{movie}))} source={{uri: movie.image}}/>
                <View style={{flexDirection: "row", marginBottom: "5%", marginTop: "5%", alignSelf: 'center'}}>
                    <Text>Gênero: {movie.genero}</Text>
                </View>
                <View style={{flexDirection: "row", marginBottom: "7%", marginTop: "3%", alignSelf: 'center'}}>
                    <Text>Duração: {movie.duracao}</Text>
                </View>
                <Button title="Adicionar a wishlist"></Button>
                </Card>
            )
        })}   
    </ScrollView>
  );
}

export default Home