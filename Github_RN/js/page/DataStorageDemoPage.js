import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, PixelRatio, AsyncStorage } from 'react-native';
import DataStore from '../expand/dao/DataStore'

const KEY = "save_key"
export default class DataStorageDemoPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showValue: ''
		}
		this.dataStore = new DataStore();
	}
	loadData() {
		let url = `https://api.github.com/search/repositories?q=${this.value}`;
		this.dataStore.fetchData(url)
			.then(data => {
				let showData = `初次数据加载时间：${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
				this.setState({
					showValue: showData
				})
			})
			.catch(error => {
				error && console.log(error.toString());
			})
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>离线缓存框架使用</Text>
				<TextInput
					style={styles.input}
					onChangeText={text => {
						this.value = text;
					}}
				/>
				<View style={styles.input_container}>
					<Text
						onPress={() => {
							this.loadData();
						}}
					>获取数据</Text>

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