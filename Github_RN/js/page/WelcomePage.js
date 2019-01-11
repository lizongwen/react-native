/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { YellowBox } from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class WelcomePage extends Component {
	componentDidMount() {
	}
	componentWillUnmount() {
	}
	goHomePage(){
		NavigationUtil.resetToHomePage({
			navigation:this.props.navigation
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome} onPress={()=>this.goHomePage()}>欢迎进入欢迎页面,点击进入</Text>
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
