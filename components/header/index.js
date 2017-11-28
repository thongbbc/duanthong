import React, { Component } from 'react';
import {width,height} from '../../supportScreen'
import {
  Platform,TextInput,TouchableOpacity,
  StyleSheet,
  Text,Image,
  View
} from 'react-native';


export default class Header extends Component {
    render() {
        return(
            <View style = {{padding:10,top:20,height:50,width:width,backgroundColor:'transparent'}}>
                {this.props.children}
            </View>
        )
    }
}