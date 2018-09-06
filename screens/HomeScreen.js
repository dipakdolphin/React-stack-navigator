import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions} from 'react-native';


class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
     <Text>HomeScreen</Text>
     </View>
    );
  }
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },  
});
