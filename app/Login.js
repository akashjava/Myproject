/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button
 } from 'react-native';
 import getToken from "./common/token-service";

 
 
 const Login = ({navigation}) => {
        return (
           
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Login Screen</Text>
         <Button
           title="Go to Home"
           onPress={() => navigation.navigate('home')}
         />
       </View>
            
        );

      
 };
  
 
 export default Login;
 