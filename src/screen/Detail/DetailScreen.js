/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
class DetailScreen extends Component {
    static navigationOptions = {
        title: "Home",
        headerStyle: {
            backgroundColor: 'white'
        }
    }
    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.openDrawer()}
                    title="Open Drawer"
                />
                <Text>Welcome App my name oka</Text>
            </View>
        );
    }
}
class Details2Screen extends Component {
    static navigationOptions = {
        title: "Detail",
        headerStyle: {
            backgroundColor: 'white'
        }
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}
const AppNavigation = createStackNavigator(
    {
        DetailScreen: DetailScreen,
        DetailTwo: Details2Screen
    }, {
        // initialRouteName: "Detail",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'green'
            }
        }
    }
);
const appDrawNavigation = createDrawerNavigator({
    Home: App,
    Details: DetailsScreen,
}, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'green'
            }
        }
    })
const appTabNavigator = createBottomTabNavigator({
    Home: App,
    Details: DetailsScreen,
})
export default createAppContainer(appDrawNavigation);

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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
