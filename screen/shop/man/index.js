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
export default class Man extends Component {

    swiper = () => {
        return (
        <View style = {{height:height/3,width,
        borderBottomWidth:3,
        borderTopWidth:1,
        borderTopColor:'#DEDEDE',
        borderBottomColor:'#CCCCCC',}}>
            <Swiper
            dotColor = {'rgba(255,255,255,0.6)'}
            showsPagination = {true}
            activeDotColor = {'white'}
            style = {styles.wrapper}
            autoplay = {true}
            showsButtons={false}>
               <View style = {{flex:1}}>
                    <Image 
                    resizeMode='cover'
                    source={{uri: 'https://media.tintuc.vn/uploads/medias/2016/03/04/550x500/fashionista-viet-gay-an-tuong-tai-tuan-le-thoi-trang-quoc-te-1-bb-baaabVEAAE.jpg'}}
                    style={styles.slide1}/>
                </View>
               <View style = {{flex:1}}>
                    <Image 
                    resizeMode='cover'
                    source={{uri: 'https://media.tintuc.vn/uploads/medias/2016/03/04/550x500/fashionista-viet-gay-an-tuong-tai-tuan-le-thoi-trang-quoc-te-1-bb-baaabVEAAE.jpg'}}
                    style={styles.slide2}/>
                </View>
               <View style = {{flex:1}}>
                    <Image 
                    resizeMode='cover'
                    source={{uri: 'https://media.tintuc.vn/uploads/medias/2016/03/04/550x500/fashionista-viet-gay-an-tuong-tai-tuan-le-thoi-trang-quoc-te-1-bb-baaabVEAAE.jpg'}}
                    style={styles.slide3}/>
                </View>
            </Swiper>
        </View>
        )
    }
    render(){
        return(
            <View style = {{flex:1}}>
                <View style = {{flex:1}}>
                    {this.swiper()}
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
const styles = {
  container: {
    flex: 1
  },
  stretch : {
    width,height,
    position:'absolute'
  },
  wrapper: {
    
  },
  slide1: {
    flex:1,
  },
  slide2: {  
    flex:1
  },
  slide3: {
    flex:1,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
};