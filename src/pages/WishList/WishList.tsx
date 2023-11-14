import React from 'react'
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


const WishList = ({route}: any) => {
  const {wishList} = route.params

  return (
    <ScrollView>
      {
        wishList.map((prod:any, i: number) => {
          return(
            <Card>
            <Card.Title>{prod.name}</Card.Title>
              <Card.Divider/>
            <Card.Image source={{uri: prod.image}}/>
          </Card>  
            )
          })}   
      </ScrollView>
    );
  }
export default WishList