'use strict';

import { Font } from 'expo';
import { Dimensions } from 'react-native';

var React = require('react-native');
var {windowHeight, windowWidth} = Dimensions.get('window');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

// flex: 1 takes up all available space
// if using multiple values for flex, proportions of components scale
// default direction of parent container is col instead of row for native
// flexDirection:
// justifyContent: distribution of children along primary axis (flex-start, center, flex-end, space-around, space-between, space-evenly)
// alignItems: distribution of children along secondary axis (flex-start, center, flex-end, stretch)
// for stretch to work, children can't have fixed dimension along secondary axis
gdprcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
},

gdprbutton: {
    backgroundColor: 'gray',

},

image: {
    width: 200,
    height: 200,
    margin: 20,
},

landingContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
},

landingScreenTitle: {
    fontSize: 45,
    // fontFamily: 'raleway',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
},

description: {
    padding: 10,
},

item: {
    padding: 10,
    fontSize: 18,
    height: 44,
},

scrollbackground: {
    // backgroundColor: '#ccd8ff',
    height: windowHeight,
    alignItems: 'center',
},

background: {
    // backgroundColor: '#ccd8ff',
    flex: 1,
    alignItems: 'center',
},

buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    margin: 10,
    // borderRadius: 4,
    // borderWidth: 0.5,
},

button: {
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
},

blue: {
    color: 'blue',
},

red: {
    color: 'red',
},

});