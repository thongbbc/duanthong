/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import LoginScreen from './screen/login'

import Drawer from './screen/main/drawer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer/reducerMain'

import {width,height} from './supportScreen'
import {
  StackNavigator,
} from 'react-navigation';

import {
  Platform,TextInput,TouchableOpacity,
  StyleSheet,
  Text,Image,
  View
} from 'react-native';
class Main extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Drawer/>
      </Provider>
    )
  }
}

const App = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
      header: null,
      gesturesEnabled: false,
    })
  },
  Main: {screen: Main,
    navigationOptions: ({navigation}) => ({
      header: null,
      gesturesEnabled: false,
    }),
  },
});
export default App;

