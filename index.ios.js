/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
var my = "heihei";
var you = "这是我修改的员工";
var Main = require("./component/Main");
export default class DouBanDemo extends Component {
    render() {
        return (
            <Main/>
        );
    }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('DouBanDemo', () => DouBanDemo);
