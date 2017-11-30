import React, { Component } from 'react';
import {width,height,typeScreen} from '../../supportScreen'
import {
  Platform,TextInput,TouchableOpacity,
  StyleSheet,
  Text,Image,
  View
} from 'react-native';

export default class CardView extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {heightCardView,title,widthCardView,image} = this.props
        const linkImage = '../../img/'+image
        return(
            <View style = {{
                borderBottomColor:'#C0C4C7',
                borderBottomWidth:2,
                borderLeftWidth:1,
                borderLeftColor:'#DADEE1',
                borderRightWidth:2,
                borderRightColor:'#D9DDE1',
                width:widthCardView,alignItems:'center',height:heightCardView,backgroundColor:'#FFFFFF'}}>
                <Image
                    style={{height:heightCardView - heightCardView/5,width:widthCardView-3}}
                    resizeMode='stretch'
                    source={{uri: 'https://qph.ec.quoracdn.net/main-qimg-aae6f99b8a8d8510e753fbc4ff8c4263-c'}}
                />
                <View style = {{height:heightCardView/5,justifyContent:'center',width:widthCardView,alignItems:'center'}}>
                    <Text style = {{fontSize:12,color:'#898B8D',fontSize:15,fontWeight:'500'}}>{title}</Text>
                </View>
            </View>
        )
    }
}