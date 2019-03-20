/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';


class HomeScreen extends Component {
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
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Home2')}
                />
                <Button
                    title="Go to Tester"
                    onPress={() => this.props.navigation.navigate('Tester')}
                />
                <Text>Welcome App my name oka</Text>
            </View>
        );
    }
}
class Tester extends Component {
    static navigationOptions = {
        title: "Tester",
        headerStyle: {
            backgroundColor: 'green'
        }
    }
    render() {
        return (
            <View>
                <Text style="{color:#000}">Welcome Back My React Native </Text>
            </View>
        )
    }
}
class Home2Screen extends Component {
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
        Home: HomeScreen,
        Home2: Home2Screen,
        Tester: Tester
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
    Home: HomeScreen,
    Details: Home2Screen,
}, {
        // initialRouteName: "Detail",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'green'
            }
        }
    })
const appTabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Details: Home2Screen,
})
export default createAppContainer(AppNavigation);

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
