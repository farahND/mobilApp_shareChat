import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

class Home extends Component {
  constructor (props) {
    super(props)
    this.state ={count:0}
  }
  clickcount = () => {
    this.setState({count:this.state.count+1})
    console.log("thanks")
  }

  render (){
    return (
            <View style={styles.container}>
              <View>
              <Image source={require('./images.png')} style={styles.imagestyle} />
              <Text style={styles.texstyle}>Share Chat</Text>
              <Button title='Like' onPress={()=> {this.clickcount()}}></Button>
              <Text style={styles.txtstyle}>Subscribers : {this.state.count}</Text>
              <Text style={styles.textstyle}>Mobil Application</Text>
              </View>
              <Button title="About" onPress={()=> this.props.navigation.navigate('About')}></Button>
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
  },
  Button : {
    fontSize : 30,
    color : 'white',
    fontWeight : 'bold'
  },
  txtstyle : {
    fontSize : 20 ,
    textAlign : 'left',
    color : 'gray',
    padding : 20,
    fontWeight : 'bold'
  },
  texstyle : {
    fontSize : 45 ,
    textAlign : 'center',
    color : 'white',
    padding : 20,
    fontWeight : 'bold',
    textShadowColor : 'gray'
},
imagestyle : {
  borderRadius : 100,
  width : 200,
  height : 200,
  alignItems : 'center',
  alignSelf : 'center'
}
});

export default Home;