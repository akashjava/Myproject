/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   Text,
   Button,View
 } from 'react-native';
 
 
 const Home = ({navigation}) => {
   return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Login"
      onPress={() => navigation.navigate('login')}
    />
  </View>
       
   );
 };
  
 
 export default Home;
 