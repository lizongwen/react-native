import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import actions from '../action/index';

class MyPage extends Component {
	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>MyPage</Text>
				{/* <Button title="改变主题色" onPress={() => {
					navigation.setParams({
						theme: {
							tintColor: 'blue',
							updateTime: new Date().getTime()
						}
					})
				}}></Button> */}
				<Button title="改变主题色" onPress={() => {
					this.props.onThemeChange('yellow')
				}}></Button>
			</View>
		);
	}
}

const mapStateToProps = state => ({});
const mapDispatchToprops=dispatch=>({
	onThemeChange:theme=>dispatch(actions.onThemeChange(theme))
})
export default connect(mapStateToProps,mapDispatchToprops)(MyPage);

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