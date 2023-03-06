import { View, Text, TextInput ,Button, Alert, StyleSheet} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = () => {
    if(email === 'bala.pranay' && password === 'pranay'){
      navigation.navigate('Home');
    }
  }
  return (
    <View >
      <View style={styles.text}>
        <Text >ENTER YOUR LOGIN CREDENTIALS HERE</Text>
      </View>
      <View>
        <Text style={styles.text}>Enter User Email :</Text>
      </View>
      <View>
        <TextInput
          placeholder="Email"
          onChangeText={newEmail => setEmail(newEmail)}
          defaultValue = {email}
        />
      </View>
      <View>
        <Text>Enter Password :</Text>
      </View>
      <View>
        <TextInput
          placeholder="Password"
          onChangeText={newPassword => setPassword(newPassword)}
          defaultValue = {password}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Button onPress={() => {handleClick()}} title="Login"/>
      </View>
    </View>
  )
}
const styles= StyleSheet.create({
    text: {alignItems:"center", justifyContent:"center"}
})
export default Login