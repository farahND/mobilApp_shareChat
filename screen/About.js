import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

class About extends Component {
  
  render (){
    return (
        <View style={styles.container}>
<<<<<<< HEAD
         <Text style={styles.textstyle}>About</Text> 
         <Text>This is the first project</Text>    
=======
         <Text style={styles.textstyle}>About</Text>     
>>>>>>> b7a2edb18e3064ee6b68f5a98021e9387d5bd865
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
<<<<<<< HEAD
      width: Dimensions.get('window').width,
=======
>>>>>>> b7a2edb18e3064ee6b68f5a98021e9387d5bd865
      backgroundColor : 'powderblue'
  }
});

export default About;