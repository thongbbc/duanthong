
import React, { Component } from 'react';
import {width,height} from '../../supportScreen'

import {
  Platform,TextInput,TouchableOpacity,
  StyleSheet,
  Text,Image,
  View
} from 'react-native';
class LoginScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          resizeMode='contain'
          source={require('../../img/background.jpg')}/>
        <View
          style = {{justifyContent:'center',alignItems:'center',position:'absolute',height,width,backgroundColor:'rgba(255,255,255,0.1)'}}>
          <View style = {{bottom:height/5/2,justifyContent:'center',alignItems:'center',width:width-40,height:40}}>
            <Text style = {{padding:5,color:'black',fontSize:60,fontWeight:'500',fontStyle:'italic'}}
            >Picker</Text>
            <Text style = {{color:'gray',fontSize:30}}>~</Text>
          </View>
          <View style = {{width:width-40,backgroundColor:'rgba(255,255,255,0.3)',borderWidth:1,borderColor:'white'}}>
            <TextInput
              placeholder = 'Username'
              style={{height: 40,padding:10,marginLeft:15,marginRight:15,marginTop:15,
               marginBottom:5,borderColor: 'rgba(0,0,0,0.3)', borderWidth: 1,backgroundColor:'white'}}
            />
            <TextInput
              placeholder = 'Password'
              style={{height: 40,padding:10,marginLeft:15,marginRight:15,
               marginBottom:15,borderColor: 'rgba(0,0,0,0.3)', borderWidth: 1,backgroundColor:'white'}}
            />
          </View>
          <View style = {{borderWidth:1,borderColor:'white',justifyContent:'center',alignItems:'center',
          backgroundColor:'rgba(255,255,255,0.8)',width:width-40,height:40,marginTop:20}}>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Main', {name: 'Thong'})
              }}>
            <View style={{width:width-40,height:40,justifyContent:'center',alignItems:'center'}}>
              <Text style = {{color:'black',fontSize:15,fontWeight:'bold'}}>Login</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  stretch : {
    flex:1
  }
});
export default LoginScreen;