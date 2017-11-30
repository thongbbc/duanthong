import React, { Component } from 'react';
import {width,height,typeScreen} from '../../supportScreen'
import {
  Platform,TextInput,TouchableOpacity,
  StyleSheet,
  Text,Image,
  View
} from 'react-native';

export default class Header extends Component {
    render() {
        var color1 = '#fff',color2='#fff';
        switch (this.props.type) {
            case typeScreen.main : {
                color1 = '#FDFDFD'
                color2 = '#FDFDFD'
            }
        }
        return(
            <View style = {{height:70}}>
            <View style = {{height:20,width,backgroundColor:color1}}>
            </View>
            <View style = {{flexDirection:'row',alignItems:'center',padding:10,height:50,width:width,backgroundColor:color2}}>
                {this.props.children}
            </View>
            </View>
        )
    }
}