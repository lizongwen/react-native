import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './navigator/AppNavigator'
import store from './store';


// type Props = {};
export default class App extends Component {
	componentDidMount() {
		console.log(this.props)
		setTimeout(function () {
			console.log(8888)
		}, 2000)
	}
	render() {
		return <Provider store={store}>
			<AppNavigator></AppNavigator>
		</Provider>;
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
