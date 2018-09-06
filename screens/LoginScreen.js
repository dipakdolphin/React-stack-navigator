import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Button} from 'react-native';


class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
     <Button title="Goto Home Screen" 
     onPress= {()=> this.props.navigation.navigate('Home')} />
     </View>
    );
  }
}

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },  
});
