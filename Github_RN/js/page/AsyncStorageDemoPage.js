import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, PixelRatio, AsyncStorage } from 'react-native';

const KEY = "save_key"
export default class AsyncStorageDemoPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showValue: ''
		}
	}
	async doSave() {
		AsyncStorage.setItem(KEY, this.value, error => {
			error && console.log(error.toString());
		})
	}
	async doRemove() {
		AsyncStorage.removeItem(KEY,error=>{
			error && console.log(error.toString());
		})
	}
	async getData() {
		AsyncStorage.getItem(KEY, (error, value) => {
			this.setState({
				showValue: value
			});
			console.log(value);
			error && console.log(error.toString());
		})
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>AsyncStorageDemoPage</Text>

				<TextInput
					style={styles.input}
					onChangeText={text => {
						this.value = text;
					}}
				/>
				<View style={styles.input_container}>
					<Text
						onPress={() => {
							this.doSave();
						}}
					>存储</Text>
					<Text
						onPress={() => {
							this.doRemove();
						}}
					>删除</Text>
					<Text
						onPress={() => {
							this.getData();
						}}
					>获取</Text>
				</View>
				<Text>
					{this.state.showValue}
				</Text>
			</View>

		);
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	input: {
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 10,
		paddingRight: 10,
		borderWidth: 1,
		borderColor: 'black',
		fontSize: 20,
		backgroundColor: '#fff',
		marginRight: 10
	},
	input_container: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	}
});