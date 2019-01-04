import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import NavigationUtil from './../navigator/NavigationUtil';
// type Props = {};
export default class PopularPage extends Component {
	constructor(props) {
		super(props);
		this.tabNames = ['Java', 'Android', 'IOS', 'React', 'React-Native', 'Web'];
	}
	_genTabs() {
		const tabs = {};
		this.tabNames.forEach((item, index) => {
			tabs[`tab${index}`] = {
				screen: props=><PopularTab {...props} tabLabel={item}/>,//传递参数到组件
				navigationOptions: {
					title: item
				}
			}
		});
		return tabs;
	}
	render() {
		const TabNavigatior = createAppContainer(createMaterialTopTabNavigator(
			this._genTabs(), {
				tabBarOptions: {
					tabStyle: styles.tabStyle,
					upperCaseLabel: false,//是否标签大写，默认为true
					scrollEnabled: true,//默认为false
					style: {
						backgroundColor: '#678'//TabBar的背景色
					},
					indicatorStyle:styles.indicatorStyle,//标签下面横线颜色
					labelStyle:styles.labelStyle//文字颜色
				}
			}
		))
		return <View style={{ flex: 1 }}>
			<TabNavigatior />
		</View>;
	}
}


class PopularTab extends Component {
	render() {
		const { tabLabel } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>{tabLabel}</Text>
				<Text onPress={() => {
					NavigationUtil.goPage({ aa: 111 }, 'DetailPage')
				}}>跳转到详情页</Text>
				<Button 
					title={"Fetch使用"}
					onPress={() => {
					NavigationUtil.goPage({ aa: 111 }, 'FetchDemo')
				}}/>
				<Button 
					title={"asyncStorage使用"}
					onPress={() => {
					NavigationUtil.goPage({ aa: 111 }, 'AsyncStorageDemoPage')
				}}/>
				
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
	},
	tabStyle: {
		minWidth: 50
	},
	indicatorStyle:{
		height:2,
		backgroundColor:'#fff'
	},
	labelStyle:{
		fontSize:13,
		marginTop:6,
		marginBottom:6
	}
});
