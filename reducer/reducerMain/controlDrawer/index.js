import React from 'react';
import {Animated,Easing} from 'react-native';
const defaultvalue = {
    latitude:0,
    longitude:0
}
export default (state = defaultvalue,actions) => {
    switch(actions.type) {
        case 'getCurrentLocation': {
            return {
                ...state
            }
        };
        case 'setCurrentLocation': {
            return {
                latitude:actions.latitude,
                longitude:actions.longitude
            }
        };
        default:return state;
    }
}