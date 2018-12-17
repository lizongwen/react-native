/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class WelcomePage extends Component{
	componentDidMount(){
		console.log(this.props)
		setTimeout(()=>{
			console.log('1222')
			this.props.navigation.navigate("Main");
		},3000)
	}
	componentWillUnmount(){
		this.timer&&clearTimeout(this.timer)
	}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>欢迎WelcomePage1</Text>
      </View>
    );
  }
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
  }
});
