import React, { Component } from 'react';
import {width,height} from '../../supportScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/header'
import {connect} from 'react-redux'
import * as action from '../../actions/main'
import axios from 'axios';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
var token = 'pk.eyJ1IjoidGhvbmdiYmMiLCJhIjoiY2o5eHR1cHllMXcxODMycGNrcHFob3c1dCJ9.061sS1mxn4yjb9bdy089jQ'
MapboxGL.setAccessToken(token);

import {
  Platform,TextInput,TouchableOpacity,
  StyleSheet,
  Text,Image,Animated,Easing,
  View
} from 'react-native';
class MainScreen extends Component<{}> {
    constructor(props){
        super(props)
        this.spinValue = new Animated.Value(0)
        this.state = {
            yourAddress:''
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            const self = this
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            this.props.setCurrentLocation(latitude,longitude);
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false`)
            .then(function (response) {
                const data =response.data
                const results = data.results
                if (data.status == 'OK') {
                    self.setState({
                        yourAddress:results[0].formatted_address
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        (error) => alert(error.message)
    );
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
                    <Image
                    style={styles.stretch}
                    resizeMode='contain'
                    source={require('../../img/background.jpg')}/>
                    <Header>
                        <Animated.View style = {{width:30,transform: [{rotate: spin}]}}>
                        <TouchableOpacity onPress = {()=>{this.spin()}}>
                        <Icon
                            style = {{left:5}} name="bars" size={30} color="#900" />
                        </TouchableOpacity>
                        </Animated.View>
                    </Header>

                    <View style = {{borderRadius:20,marginTop:20,height:height/3,width:width-40}}>
                        <MapboxGL.MapView
                            showUserLocation={true}
                            userTrackingMode={MapboxGL.UserTrackingModes.Follow}
                            zoomLevel={10}
                            style={{borderWidth:1,borderColor:'gray',borderRadius:20,height:height/3,width:width-40}} />
                    </View>
                    <View style = {{
                        marginTop:30,
                        flexDirection:'row',
                        width:width-40
                    }}>
                        <Text style = {{textAlign:'left',color:'white',flex:1,fontWeight:'bold'}}>Your address:</Text>
                        <Text ellipsizeMode={'clip'} numberOfLines={3} style = {{color:'white',flex:3}}>{this.state.yourAddress}</Text>
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
  }
};
const mapStateToProps = (state) => {
    return {
        currentPosition:state.currentPosition
    }
}
export default connect(mapStateToProps,action)(MainScreen);