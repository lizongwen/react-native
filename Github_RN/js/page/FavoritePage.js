import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import actions from '../action/index';

// type Props = {};
class FavoritePage extends Component {
	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>FavoritePage</Text>
				{/* <Button title="改变主题色" onPress={() => {
					navigation.setParams({
						theme: {
							tintColor: 'green',
							updateTime: new Date().getTime()
						}
					})
				}}></Button> */}
				<Button title="改变主题色" onPress={() => {
					this.props.onThemeChange('red');
				}}></Button>
			</View>
		);
	}
}


const mapStateToProps = state => ({});
const mapDispatchToprops = dispatch => ({
	onThemeChange: theme => dispatch(actions.onThemeChange(theme))
})
export default connect(mapStateToProps, mapDispatchToprops)(FavoritePage);

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