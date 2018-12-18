import React, { Component } from 'react';
import { StyleSheet} from 'react-native';

// type Props = {};
import NavigationUtil from '../navigator/NavigationUtil';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';

export default class HomePage extends Component {
	render() {
		NavigationUtil.navigation=this.props.navigation;
		return <DynamicTabNavigator />
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
