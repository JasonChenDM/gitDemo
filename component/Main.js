/**
 * Created by dllo on 17/2/7.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

// 引入组件
var Home = require("./Home");
var Message = require("./Message");
var Find = require("./Find");
var Mine = require("./Mine");

var Main = React.createClass({
    getInitialState: function () {
        return {
            selectedTabBarItem: 'Home'
        }
    },
    render: function () {
        return (
            <TabBarIOS
                tintColor='orange'
            >
                {/*首页*/}
                <TabBarIOS.Item
                    icon={require("./../images/tabbar_home@2x.png")}
                    title='首页'
                    selected={this.state.selectedTabBarItem == 'Home'}
                    onPress={()=> {
                        this.setState({
                            selectedTabBarItem: 'Home'
                        })
                    }}
                >
                    <NavigatorIOS
                        tintColor='orange'
                        style={{flex: 1}}
                        initialRoute={{
                            component: Home,//需要控制的具体板块
                            title: '主页',
                            leftButtonIcon: require("./../images/navigationbar_friendattention@2x.png"),
                            rightButtonIcon: require("./../images/navigationbar_pop@2x.png")
                        }}
                    />
                </TabBarIOS.Item>

                {/*消息*/}
                <TabBarIOS.Item
                    icon={require("./../images/tabbar_message_center@2x.png")}
                    title='消息'
                    selected={this.state.selectedTabBarItem == 'Message'}
                    onPress={()=> {
                        this.setState({
                            selectedTabBarItem: 'Message'
                        })
                    }}
                >
                    <NavigatorIOS
                        style={{flex: 1}}
                        initialRoute={{
                            component: Message,//需要控制的具体板块
                            title: '消息'
                        }}
                    />
                </TabBarIOS.Item>

                {/*发现*/}
                <TabBarIOS.Item
                    icon={require("./../images/tabbar_discover@2x.png")}
                    title='发现'
                    selected={this.state.selectedTabBarItem == 'Find'}
                    onPress={()=> {
                        this.setState({
                            selectedTabBarItem: 'Find'
                        })
                    }}
                >
                    <NavigatorIOS
                        style={{flex: 1}}
                        initialRoute={{
                            component: Find,//需要控制的具体板块
                            title: '发现'
                        }}
                    />
                </TabBarIOS.Item>


                {/*我的*/}
                <TabBarIOS.Item
                    icon={require("./../images/tabbar_profile@2x.png")}
                    title='我的'
                    selected={this.state.selectedTabBarItem == 'Mine'}
                    onPress={()=> {
                        this.setState({
                            selectedTabBarItem: 'Mine'
                        })
                    }}
                >
                    <NavigatorIOS
                        style={{flex: 1}}
                        initialRoute={{
                            component: Mine,//需要控制的具体板块
                            title: '我的'
                        }}
                    />
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
});

const styles = StyleSheet.create({});

//输出类
module.exports = Main;