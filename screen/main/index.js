import React, { Component } from 'react';
import {width,height,typeScreen} from '../../supportScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/header'
import {connect} from 'react-redux'
import * as action from '../../actions/main'
import axios from 'axios';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
var token = 'pk.eyJ1IjoidGhvbmdiYmMiLCJhIjoiY2o5eHR1cHllMXcxODMycGNrcHFob3c1dCJ9.061sS1mxn4yjb9bdy089jQ'
MapboxGL.setAccessToken(token);
import CardView from '../../components/cardView'
import {
  Platform,TextInput,TouchableOpacity,
  StyleSheet,FlatList,ScrollView,
  Text,Image,Animated,Easing,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';




class MainScreen extends Component<{}> {
    static navigationOptions =  {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
        <Icon
            style = {{left:5}} name="home" size={25} color={'white'} />
        ),
    }
    constructor(props){
        super(props)
        this.spinValue = new Animated.Value(0)
        this.state = {
            yourAddress:''
        }
    }
    componentDidMount() {
    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //         const self = this
    //         const latitude = position.coords.latitude
    //         const longitude = position.coords.longitude
    //         this.props.setCurrentLocation(latitude,longitude);
    //         axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false`)
    //         .then(function (response) {
    //             const data =response.data
    //             const results = data.results
    //             if (data.status == 'OK') {
    //                 self.setState({
    //                     yourAddress:results[0].formatted_address
    //                 })
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     },
    //     (error) => alert(error.message)
    // );
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
        <View style = {{height:height/3,width,
        borderBottomWidth:3,
        borderTopWidth:1,
        borderTopColor:'#DEDEDE',
        borderBottomColor:'#CCCCCC',}}>
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
                            <Text style = {{fontSize:17,fontWeight:'bold',width:width-23-23-100,textAlign:'center'}}>WELCOME</Text>
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
                    <ScrollView style = {{height:height-70}}>
                        <View style = {{width,alignItems:'center'}}>
                        {this.swiper()}
                        {/* <View style = {{
                            flexDirection:'row',
                            borderBottomWidth:2,
                            borderLeftWidth:2,
                            borderLeftColor:'#DEDEDE',
                            borderRightWidth:2,
                            borderRightColor:'#DEDEDE',
                            borderTopWidth:1,
                            borderTopColor:'#DEDEDE',
                            borderBottomColor:'#CCCCCC',
                            justifyContent:'center',width:width-30,marginTop:20,
                            height:50,backgroundColor:'#F8F8F8',alignItems:'center'}}>
                            <Icon
                                style = {{left:5,marginRight:10,textAlign:'center',flex:2}} name="search" size={20} color="#B0AFB5" />
                            <TextInput
                                style = {{flex:9}}
                                placeholder = {'Search a item ...'}
                            />
                        </View> */}
                        <View style = {{marginBottom:20,alignItems:'center',justifyContent:'center',marginTop:20}}>
                            <View style = {{backgroundColor:'#C4C6C5',height:3,width:width/6}}/>
                            <Text style = {{color:'#3C484A',fontSize:17,fontWeight:'bold',marginTop:10,marginBottom:10}}>BEST SELLER</Text>
                            <View style = {{backgroundColor:'#C4C6C5',height:3,width:width/6}}/>
                        </View>
                        <FlatList
                            style = {{flex:1}}
                            data={[{key: 'Bikini'}, {key: 'Bikini'}]}
                            renderItem={({item,index}) => {
                                if (index == 1) {
                                    return(
                                        <View
                                        style = {{
                                            borderBottomColor:'#C0C4C7',
                                            paddingTop:5,paddingBottom:5,paddingRight:10,paddingLeft:10,width,flexDirection:'row',justifyContent:'space-between'}}>
                                        <CardView
                                        image = {'hinh3.jpg'}
                                        widthCardView = {width-20}
                                        title = {item.key+'dasdas'} heightCardView = {height/3}/>
                                        </View>
                                    )
                                } else 
                                return(
                                    <View
                                    style = {{paddingTop:5,paddingBottom:5,paddingRight:10,paddingLeft:10,width,flexDirection:'row',justifyContent:'space-between'}}>
                                        <CardView
                                        image = {'hinh1.jpg'}
                                        widthCardView = {width/2-15}
                                        title = {item.key} heightCardView = {height/3}/>
                                        <CardView
                                        image = {'hinh2.jpg'}
                                        widthCardView = {width/2-15}
                                        title = {item.key+'dasdsa'} heightCardView = {height/3}/>
                                    </View>
                                )
                            }}
                        />
                        </View>
                    </ScrollView>
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
const mapStateToProps = (state) => {
    return {
        currentPosition:state.currentPosition
    }
}
export default connect(mapStateToProps,action)(MainScreen);