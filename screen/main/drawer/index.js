import React, { Component } from 'react';
import {
    View,Text,ScrollView,Image
} from 'react-native';
import {
  DrawerNavigator,
} from 'react-navigation';
import MainScreen from '../'
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {width,height} from '../../../supportScreen'
import LinearGradient from 'react-native-linear-gradient';

const CustomDrawerContentComponent = (props) => (
    <LinearGradient 
        colors={['#76b852','#8DC26F','#8DC26F','#8DC26F','#fff','#fff','#fff']}
        style={{height,flex:1}}>
        <ScrollView style = {{flex:1}}>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}> 
                <View 
                style={{height:height/3,flex:1,justifyContent:'center',alignItems:'center',}}>
                    <Image
                        style={{backgroundColor:'white',borderRadius:width/3/2,width:width/3,height:width/3}}
                        resizeMode='cover'
                        source={require('../../../img/background.jpg')}/>
                    <Text style = {{color:'white',backgroundColor:'transparent',top:10}}>Nguyen Anh Thong</Text>
                </View>
                <View style = {{backgroundColor:'white',height:height*2/3}}>
                    <DrawerItems {...props} />
                </View>
            </SafeAreaView> 
        </ScrollView>
  </LinearGradient>
);

const styles = {
  container: {
    flex: 1
  },
};



class Screen1 extends Component {
    render() {
        return(
            <View style = {{flex:1,backgroundColor:'red'}}>

            </View>
        )
    }
}
class Screen2 extends Component {
    render() {
        return(
            <View style = {{flex:1,backgroundColor:'green'}}>

            </View>
        )
    }
}

const Drawer = DrawerNavigator({
    Main: {
        screen: MainScreen,
    },
    Screen1: {
        screen: Screen1,
    },
    Screen2: {
        screen: Screen2,
    },
},{
    drawerBackgroundColor:'white',
    contentComponent:CustomDrawerContentComponent,
    contentOptions: {
        activeBackgroundColor: 'rgba(0,0,0,0.05)',
        activeTintColor: 'gray',
        labelStyle: {
            fontSize: 16,
        }
    },
});

export default Drawer;