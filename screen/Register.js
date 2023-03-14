import React , {useState} from 'react';
import { Text, View, StyleSheet , SafeAreaView , Platform , StatusBar , Image } from 'react-native';
import {TextInput  ,TouchableOpacity } from 'react-native-paper';

export default function Register() {
  const [name,setName] = useState(null);
  const [mail,setMail] = useState(null);
  const [phoneNo,setPhone] = useState(null);
  const [password,setPassword] = useState(null);

  (name) => setName(name);
  (mail) => setMail(mail);
  (phoneNo) => setPhone (phoneNo);
  (password) => setPassword (password);

  console.log(name);
  console.log(mail);
  console.log(phoneNo);
  console.log(password);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./images.png')} style={styles.imagestyle}></Image>
      <Text style={styles.texstyle}>Share Chat App.</Text> 
      <View style={styles.text}>
        <Text>User Name</Text>
        <TextInput placeholder="Type Your User Name" onChangeText = {setName}/>
        <Text>E-Mail</Text>
        <TextInput placeholder="Type Your E-Mail" onChangeText = {setMail}/>
        <Text>Phone No.</Text>
        <TextInput placeholder="Type Your Phone No." onChangeText = {setPhone}/>
        <Text>Password</Text>
        <TextInput label="Password" secureTextEntry right={<TextInput.Icon icon="eye" />} />
      </View>
      <View style={styles.Button}>
      <TouchableOpacity onPress={() => console.log('Pressed')}>
        <Text>Submit</Text>  
      </TouchableOpacity> 
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0 ,
    width: Dimensions.get('window').width,
    backgroundColor : 'lightblue',
   
  },
  texstyle : {
    flex: 1,
    fontSize : 45 ,
    textAlign : 'center',
    color : 'white',
    padding : 20,
    fontWeight : 'bold'
},
  imagestyle : {
    flex : 1,
    paddingTop : Platform.OS === 'android' ? 50 : 0,
    marginTop : 50,
    borderRadius : 100,
    width : 200,
    height : 200,
    alignItems : 'center',
    alignSelf : 'center'
  },
  text: {
    flex: 1,
    textAlign : 'center',
    fontSize : 25 ,
    color : 'gray',
    padding : 20,
     marginTop : 50,
    fontWeight : 'bold'
  },
});