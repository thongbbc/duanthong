import React, { Component } from 'react';
import {width,height,typeScreen} from '../../supportScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/header'
import {connect} from 'react-redux'
import * as action from '../../actions/main'
import axios from 'axios';
import {
  TabNavigator,
} from 'react-navigation';
import CardView from '../../components/cardView'
import Categories from './categories'

import {
  Platform,TextInput,TouchableOpacity,
  StyleSheet,FlatList,ScrollView,
  Text,Image,Animated,Easing,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';

class Man extends Component {
    render(){
        return(
            <View style = {{flex:1,backgroundColor:'red'}}></View>
        )
    }
}
class Woman extends Component {
    render(){
        return(
            <View style = {{flex:1,backgroundColor:'red'}}></View>
        )
    }
}
const Pager = TabNavigator({
    Categories: {
        screen: Categories,
    },
    Man: {
        screen: Man,
    },
    Woman: {
        screen:Woman
    }
}, {
    ...TabNavigator.Presets.AndroidTopTabs,
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled:true,
    tabBarOptions: {
        activeTintColor: '#494848',
        inactiveTintColor:'#BCBCBC',
        labelStyle: {
            fontWeight:'500',
            fontSize: 12,
        },
        style: {
            backgroundColor: '#FDFDFD',
        },
        indicatorStyle: {
            backgroundColor: '#3DA8E0',
            width:width/3-20,
            marginLeft:(width/3-((width/3)-20))/2,
            height:3
        },
    }
});


export default class Shop extends Component<{}> {
    constructor(props){
        super(props)
        this.spinValue = new Animated.Value(0)
    }
    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
            toValue: 1,
            duration: 200,
            easing: Easing.linear
            }
        ).start(() => 
            Animated.timing(
                this.spinValue,
                {
                    toValue: 0,
                    duration: 200,
                    easing: Easing.linear
                }
            ).start(()=>{this.props.navigation.navigate('DrawerToggle');})
        )
    }
    swiper = () => {
        return (
        <View style = {{height:height/3,width}}>
            <Swiper
            dotColor = {'rgba(255,255,255,0.6)'}
            showsPagination = {true}
            activeDotColor = {'white'}
            autoplay = {true}
            style={styles.wrapper} showsButtons={false}>
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
    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '30deg']
        })
        return(
            <View style={styles.container}>
                <View
                style = {{position:'absolute',alignItems:'center',
                    flex:1}}>
                    <View style = {{position:'absolute',width,height,backgroundColor:'#FEFEFE'}}/>
                    <Header type = {typeScreen.main}>
                        <Animated.View style = {{width:30,transform: [{rotate: spin}]}}>
                        <TouchableOpacity onPress = {()=>{this.spin()}}>
                        <Icon
                            style = {{left:5}} name="bars" size={30} color="#333333" />
                        </TouchableOpacity>
                        </Animated.View>
                        <View style = {{left:10,justifyContent:'center',flexDirection:'row',flex:1}}>
                            <Text style = {{fontSize:17,fontWeight:'bold',width:width-23-23-100,textAlign:'center'}}>SHOP</Text>
                            <TouchableOpacity onPress = {()=>{this.spin()}}>
                                <Icon
                                    style = {{right:5,marginLeft:10}} name="shopping-cart" size={23} color="#333333" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {()=>{this.spin()}}>
                                <Icon
                                    style = {{right:5,marginLeft:20}} name="search" size={23} color="#333333" />
                            </TouchableOpacity>
                        </View>
                    </Header>
                    <View style = {{width,height:height-70}}>
                        <Pager/>
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
    flex:1
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