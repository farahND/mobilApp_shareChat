import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screen/Home'
import About from './screen/About'
import Register from './screen/Register'
import Login from './screen/Login'
import { HeaderTitle } from '@react-navigation/stack';
import { Button } from 'react-native/Libraries/Components/Button';

//import Icon from 'react-native-vector-icons/Ionicons'
//import { ContentDrawer } from './screen/ContentDrawer'
//const Stack = createStackNavigator();
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
        screenOptions={({ navigation }) => ({headerTitleAllign: 'center'})}>
          <View style={styles.container}>
            <View>
              <Image source={require('./images.png')} style={styles.imagestyle} />
              <Text style={styles.texstyle}>Share Chat</Text>
              <Button title='Register' onPress={()=> {this.props.navigation.navigate('Register')}}></Button>
              <Button title='Log In' onPress={()=> {this.props.navigation.navigate('Log In')}}></Button>
              
              <View style={styles.Button}>
                <Button title='About' onPress={()=> {this.props.navigation.navigate('About')}}></Button>
              </View>
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
      backgroundColor : 'powderblue'
  },
  Button : {
    fontSize : 30,
    color : 'white',
    fontWeight : 'bold',
    margin : 20,
    alignItems : 'center'
  },
  txtstyle : {
    fontSize : 20 ,
    textAlign : 'left',
    color : 'gray',
    margin : 20,
    fontWeight : 'bold'
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
