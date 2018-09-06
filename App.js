/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

const ScreenWidth= Dimensions.get('window').width;


export default class App extends React.Component {
  render() { 
    return (
     <AppStackNavigator />
    );
  }
}
const AppStackNavigator= createStackNavigator({
  Login:LoginScreen,
  Home:HomeScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
});
