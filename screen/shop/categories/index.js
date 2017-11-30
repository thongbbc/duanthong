import React, { Component } from 'react';
import {width,height,typeScreen} from '../../../supportScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import axios from 'axios';
import {
  TabNavigator,
} from 'react-navigation';
import CardView from '../../../components/cardView'
import {
  Platform,TextInput,TouchableOpacity,
  StyleSheet,FlatList,ScrollView,
  Text,Image,Animated,Easing,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
export default class Categories extends Component {
    render(){
        return(
            <View style = {{flex:1}}>
                <View style = {{flex:1}}>
                    <Image 
                    resizeMode='cover'
                    source={{uri: 'https://ae01.alicdn.com/kf/HTB1cFAPJpXXXXX7XFXXq6xXFXXXF/Korean-Style-Men-Handbags-Man-Bag-Large-Shopping-Bag-For-Boys-Satchels-Black-Fashion-Messenger-Shoulder.jpg_640x640.jpg'}}
                    style={{flex:1}}/>
                    <View style = {{width,height:(height-70)/3,justifyContent:'center',alignItems:'center',position:'absolute',backgroundColor:'rgba(0,0,0,0.4)'}}>
                        <Text style = {{color:'#FFFFFF',fontSize:30}}>B A G S</Text>
                        <Text style = {{color:'rgba(255,255,255,0.8)',fontSize:20}}>2990 products</Text>
                    </View>
                </View>
                <View style = {{flex:1}}>
                    <Image 
                    resizeMode='cover'
                    source={{uri: 'https://static.varchev.com/uploads/2017/04/54cb0d02a6129_-_10256001_10152063941956674_4116247399527307681_o.jpg'}}
                    style={{flex:1}}/>
                    <View style = {{width,height:(height-70)/3,justifyContent:'center',alignItems:'center',position:'absolute',backgroundColor:'rgba(0,0,0,0.4)'}}>
                        <Text style = {{color:'#FFFFFF',fontSize:30}}>S U I T S</Text>
                        <Text style = {{color:'rgba(255,255,255,0.8)',fontSize:20}}>2990 products</Text>
                    </View>
                </View>
                <View style = {{flex:1}}>
                    <Image 
                    resizeMode='cover'
                    source={{uri: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/14/_13167594.jpg?fit=fill&fm=jpg&dpr=2&h=368&w=240&quality=45&tradecacheforcash=yes'}}
                    style={{flex:1}}/>
                    <View style = {{width,height:(height-70)/3,justifyContent:'center',alignItems:'center',position:'absolute',backgroundColor:'rgba(0,0,0,0.4)'}}>
                        <Text style = {{color:'#FFFFFF',fontSize:30}}>J A C K E T</Text>
                        <Text style = {{color:'rgba(255,255,255,0.8)',fontSize:20}}>2990 products</Text>
                    </View>
                </View>
                
            </View>
        )
    }
}