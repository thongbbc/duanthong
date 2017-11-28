import React, { Component } from 'react';
import {width,height} from '../../supportScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/header'
import {connect} from 'react-redux'
import * as action from '../../actions/main'
import MapboxGL from '@mapbox/react-native-mapbox-gl';
var token = 'pk.eyJ1IjoidGhvbmdiYmMiLCJhIjoiY2o5eHR1cHllMXcxODMycGNrcHFob3c1dCJ9.061sS1mxn4yjb9bdy089jQ'
MapboxGL.setAccessToken(token);

import {
  Platform,TextInput,TouchableOpacity,
  StyleSheet,
  Text,Image,Animated,Easing,
  View
} from 'react-native';
export default class MainScreen extends Component<{}> {
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

                    <View style = {{borderRadius:20,marginTop:20,height:height/2,backgroundColor:'red',width:width-40}}>
                    <MapboxGL.MapView
                        showUserLocation={true}
                        userTrackingMode={MapboxGL.UserTrackingModes.Follow}
                        style={{borderWidth:1,borderColor:'gray',borderRadius:20,height:height/3,width:width-40}} />
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
// const mapStateToProps = (state) => {
//     return {
//         animationMain:state.controlDrawer
//     }
// }
// export default connect(mapStateToProps,action)(MainScreen);