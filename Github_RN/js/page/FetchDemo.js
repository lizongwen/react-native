import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput,PixelRatio } from 'react-native';

// type Props = {};
export default class FetchDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showText: ''
		}
	}
	loadData() {
		console.log(this.searchKey)
		let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
		fetch(url)
			.then(response => response.text())
			.then(responseText => {
				this.setState({
					showText: responseText
				})
			})
	}
	loadData2(){
		let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
		fetch(url)
			.then(response => {
				if(response.ok){
					return response.text()
				}
				throw new Error('网络请求响应不OK')
			})
			.then(responseText => {
				this.setState({
					showText: responseText
				})
			})
			.catch(e=>{
				this.setState({
					showText: e.toString()
				})
			})
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>FetchDemo</Text>
				<View style={styles.input_container}>
					<TextInput
						style={styles.input}
						onChangeText={text => {
							this.searchKey = text;
						}} 
					/>
					<Button title="获取" onPress={() => {
					this.loadData2();
				}}/>
				</View>
				
				<Text>
					{this.state.showText}
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
		paddingTop:0,
		paddingBottom:0,
		paddingLeft:10,
		paddingRight:10,
		flex:1,
        fontSize: 20,
        backgroundColor: '#fff',
		marginRight: 10
	},
	input_container:{
		borderWidth: 1,
		borderColor: 'black',
		flexDirection:'row',
		alignItems:'center',
	}
});