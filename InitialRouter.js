import React, { Component } from "react";
import { View, AppRegistry } from "react-native";
import Home from "./app/Home";
import Login from "./app/Login";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default InitialRouter =()=>{
    return (
        <NavigationContainer>
           <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
    )

}
