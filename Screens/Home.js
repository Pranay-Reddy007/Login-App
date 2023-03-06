import { Text, View,Button } from 'react-native'
import React, { Component } from 'react'

const Home = ({navigation}) => {
    return (
      <View>
        
        <Button title="Logout" onPress={() => {navigation.navigate('Login')}}/>
      </View>
    )
  }


export default Home