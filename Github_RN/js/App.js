import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigator/AppNavigator'
import store from './store';


export default class App extends Component {
	componentDidMount() {
		// console.log(this.props)
	}
	render() {
		return <Provider store={store}>
			<AppNavigator></AppNavigator>
		</Provider>;
	}
}

