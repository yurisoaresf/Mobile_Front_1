import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import React from 'react'
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';


const MovieDetails = ({route}:any) => {
  const {movie} = route.params
  const {product} = route.params
  return (
   <Card>
      <Card.Title>
        <Text>{movie.name}</Text>
      </Card.Title>
      <Card.Image style={{resizeMode:'contain'}} source={{uri: movie.image}}/>
      <View style={{flexDirection: "row", marginBottom: "5%", marginTop: "5%", alignSelf: 'center'}}>
        <Text style={{textAlign: 'justify'}} >{movie.overview}</Text>
      </View>
      <View style={{flexDirection: "row", marginBottom: "5%", marginTop: "5%", alignSelf: 'center'}}>
        <Text>Gênero: {movie.genero}</Text>
      </View>
      <View style={{flexDirection: "row", marginBottom: "7%", marginTop: "3%", alignSelf: 'center'}}>
        <Text>Duração: {movie.duracao}</Text>
       </View>
       <View style={{flexDirection: "row", marginBottom: "7%", marginTop: "3%", alignSelf: 'center'}}>
        <Text>Dirigido por: {movie.directedBy}</Text>
       </View>
   </Card>
  )
}

export default MovieDetails