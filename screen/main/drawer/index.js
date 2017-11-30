import React, { Component } from 'react';
import {
    View,Text,ScrollView,Image,TouchableOpacity
} from 'react-native';
import {
  DrawerNavigator,
} from 'react-navigation';
import MainScreen from '../'
import Shop from '../../shop'

import {connect} from 'react-redux'
import * as action from '../../../actions/main'
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {width,height} from '../../../supportScreen'
import LinearGradient from 'react-native-linear-gradient';
import CustomDrawerContentComponent from './custom'


const styles = {
  container: {
    flex: 1
  },
};


class Screen2 extends Component {
    render() {
        return(
            <View style = {{flex:1,backgroundColor:'green'}}>

            </View>
        )
    }
}

const Drawer = DrawerNavigator({
    Home: {
        screen: MainScreen,
    },
    Shop: {
        screen: Shop,
    },
    Screen2: {
        screen: Screen2,
    },
},{
    drawerBackgroundColor:'white',
    contentComponent:CustomDrawerContentComponent,
    contentOptions: {
        activeBackgroundColor: 'rgba(0,0,0,0.05)',
        activeTintColor: 'green',
        labelStyle: {
            fontSize: 16,
        }
    },
});
class Main extends Component {
  constructor(props) {
    super(props)
    this.props.setNavigation(this.props.navigation)
  }
  render() {
    return (
        <Drawer navigationParent = {this.props.navigationParent}/>
    )
  }
}
const mapStateToProps = (state) => {
    return({
        navigationParent:state.navigation
    })
}
connect(mapStateToProps,action)(Drawer)
export default connect(mapStateToProps,action)(Main);