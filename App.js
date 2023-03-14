import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screen/Home'
import About from './screen/About'
import Register from './screen/Register'
import Login from './screen/Login'

const Drawer = createDrawerNavigator();
class App extends Component {
  constructor () {
    super()
  }

  render (){
    return (
      <NavigationContainer>
        <Drawer.Navigator 
        initialRouteName="Home"
        drawerPosition = 'left'>
          <View style={styles.container}>
            <View>
              <Image source={require('./images.png')} style={styles.imagestyle} />
              <Text style={styles.texstyle}>Share Chat</Text>
            </View>
          </View>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="About" component={About}/>
          <Drawer.Screen name="Register" component={Register}/>
          <Drawer.Screen name="Log in" component={Login}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
  container : {
      flex : 1,
      padding : 20,
      width: Dimensions.get('window').width,
      backgroundColor : 'powderblue'
  },
  texstyle : {
    fontSize : 45 ,
    textAlign : 'center',
    color : 'white',
    margin : 20,
    fontWeight : 'bold',
    textShadowColor : 'gray'
},
imagestyle : {
  flex : 1,
  borderRadius : 100,
  width : '100%',
  height : '50%',
  margin : 20,
  alignItems : 'center',
  alignSelf : 'center'
}
});
export default App;
