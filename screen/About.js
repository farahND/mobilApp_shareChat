import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

class About extends Component {
  
  render (){
    return (
        <View style={styles.container}>
         <Text style={styles.textstyle}>About</Text>     
        </View>
    )
  }
}
const styles = StyleSheet.create({
  textstyle : {
      fontSize : 35 ,
      textAlign : 'center',
      color : 'white',
      padding : 30,
      fontWeight : 'bold'
  },
  container : {
      flex : 1,
      padding : 20,
      backgroundColor : 'powderblue'
  }
});

export default About;