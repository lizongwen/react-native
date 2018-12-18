import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import NavigationUtil from './../navigator/NavigationUtil';
// type Props = {};
export default class PopularPage extends Component {
	render() {
		const TabNavigatior = createAppContainer(createMaterialTopTabNavigator({
			PopularTab1: {
				screen: PopularTab,
				navigationOptions: {
					title: 'Tab1'
				}
			},
			PopularTab2: {
				screen: PopularTab,
				navigationOptions: {
					title: 'Tab2'
				}
			}
		}))
		return <View style={{ flex: 1}}>
			<TabNavigatior />
		</View>;
	}
}


class PopularTab extends Component {
	render() {
		const { tabLabel } = this.props;
		console.log(this.props)
		return (
			<View style={styles.container}>
				{/* <Text style={styles.welcome}>{tabLabel}</Text> */}
				<Text onPress={()=>{
					NavigationUtil.goPage({aa:111},'DetailPage')
				}}>跳转到详情页</Text>
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
