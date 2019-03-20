/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import HomeScreen from './src/screen/Home/HomeScreen';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
class App extends Component {
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
class DetailsScreen extends Component {
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
    Home: {
      screen: App
    },
    Detail: DetailsScreen
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
  Details: DetailsScreen,
}, {
    // initialRouteName: "Detail",
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
// class Home extends Component {
//   static navigationOptions = {
//     headerStyle: {
//       backgroundColor: 'orange',
//     }
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }
// class Dasboard extends Component {
//   static navigationOptions = {
//     headerStyle: {
//       backgroundColor: 'orange',
//     }
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome Daseboard</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }
// const AppStactNavigation = createStackNavigator(
//   {
//     Home: Home,
//     Dasboard: App,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: 'red'
//       }
//     }
//   }
// );
// const appDrawNavigation = createDrawerNavigator(
//   {
//     Home: Home
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: 'red'
//       }
//     }
//   }
// );
// // const appContainer =
// export default createAppContainer({ AppStactNavigation });
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
