import React from 'react';
import {Animated,Easing} from 'react-native';
const defaultvalue = {
    navigation:null
}
export default (state = defaultvalue,actions) => {
    switch(actions.type) {
        case 'getNavigation': {
            return {
                ...state
            }
        };
        case 'setNavigation': {
            return {
                navigation:actions.navigation
            }
        }
        default:return state;
    }
}