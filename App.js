import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fb from './screens/Fb'
import Insta from './screens/Insta'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render(){
    return(
<AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook:{screen:Fb},
  Instagram:{screen:Insta}
})

const AppContainer = createAppContainer(TabNavigator)
