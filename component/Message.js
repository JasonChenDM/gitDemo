/**
 * Created by chendongming on 17/2/7.
 */
/**
 * Created by chendongming on 17/2/7.
 */
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
var Message = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    消息
                </Text>

            </View>
        );
    }
})
export default class DouBanDemo extends Component {

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

module.exports = Message;