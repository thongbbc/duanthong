import React, { Component } from 'react';
import {
    View,Text,ScrollView,Image,TouchableOpacity
} from 'react-native';
import {
  DrawerNavigator,
} from 'react-navigation';
import MainScreen from '../'
import Shop from '../../shop'
import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux'
import * as action from '../../../actions/main'
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {width,height} from '../../../supportScreen'
import LinearGradient from 'react-native-linear-gradient';



class CustomDrawerContentComponent extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
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
                            <Text style = {{color:'white',backgroundColor:'transparent',top:10,fontWeight:'bold'}}>Nguyen Anh Thong</Text>
                        </View>
                        <View style = {{backgroundColor:'#2C2E3B',height:height*2/3}}>
                            <DrawerItems {...this.props} />
                            <TouchableOpacity onPress = {()=>{
                                this.props.navigationParent.navigation.goBack(null)    
                            }}>
                            <View style = {{flexDirection:'row',alignItems:'center',top:10}}>
                                <Icon
                                    style = {{marginLeft:27}} name="sign-out" size={25} color={'rgba(255,255,255,0.5)'} />
                                <Text style = {{fontSize:15,fontWeight:'bold',left:25,color:'white'}}>Logout</Text>
                            </View>
                            </TouchableOpacity>
                        </View>

                    </SafeAreaView> 
                </ScrollView>
        </LinearGradient>
        )
    }
}
const styles = {
  container: {
    flex: 1
  },
};
const mapStateToProps = (state) => {
    return({
        navigationParent:state.navigation
    })
}
export default connect(mapStateToProps,action)(CustomDrawerContentComponent)