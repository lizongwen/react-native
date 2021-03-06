import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import NavigationUtil from './NavigationUtil';


const TABS = {
	PopularPage: {
		screen: PopularPage,
		navigationOptions: {
			tabBarLabel: "最热",
			tabBarIcon: ({ tintColor, focused }) => {
				return <MaterialIcons name={'whatshot'} size={26} style={{ color: tintColor }} />
			}
		}
	},
	TrendingPage: {
		screen: TrendingPage,
		navigationOptions: {
			tabBarLabel: "趋势",
			tabBarIcon: ({ tintColor, focused }) => {
				return <Ionicons name={'md-trending-up'} size={26} style={{ color: tintColor }} />
			}
		}
	},
	FavoritePage: {
		screen: FavoritePage,
		navigationOptions: {
			tabBarLabel: "收藏",
			tabBarIcon: ({ tintColor, focused }) => {
				return <MaterialIcons name={'favorite'} size={26} style={{ color: tintColor }} />
			}
		}
	},
	MyPage: {
		screen: MyPage,
		navigationOptions: {
			tabBarLabel: "我的",
			tabBarIcon: ({ tintColor, focused }) => {
				return <Entypo name={'user'} size={26} style={{ color: tintColor }} />
			}
		}
	}

}
class DynamicTabNavigator extends Component {
	constructor(props) {
		super(props);
		console.disableYellowBox = true;//禁止警告的信息输出
	}
	_tabNavigator() {
		if(this.Tabs){
			return this.Tabs;
		}
		const { PopularPage, TrendingPage, FavoritePage, MyPage } = TABS;
		const tabs = {
			PopularPage, TrendingPage, FavoritePage, MyPage//根据需要定制显示tab选项
		}
		PopularPage.navigationOptions.tabBarLabel = "最新";//修改底部tab文字
		return this.Tabs=createAppContainer(createBottomTabNavigator(tabs, {
			// tabBarComponent: TabBarComponent
			tabBarComponent: props => {
				return <TabBarComponent theme={this.props.theme}  {...props}/>
			}
		}));
	}
	render() {
		// NavigationUtil.navigation=this.props.navigation;
		const Tab = this._tabNavigator();
		return <Tab />
	}
}
class TabBarComponent extends Component {
	constructor(props) {
		super(props);
		this.theme = {
			tintColor: props.activeTintColor,
			updateTime: new Date().getTime()
		}
	}
	render() {
		// const { routes, index } = this.props.navigation.state;
		// if (routes[index].params) {
		// 	const { theme } = routes[index].params;
		// 	//以最新的更新时间为主,防止被其他tab之前的修改覆盖掉
		// 	if (theme && theme.updateTime > this.theme.updateTime) {
		// 		this.theme = theme;
		// 	}
		// }
		// return <BottomTabBar {...this.props} activeTintColor={this.theme.tintColor || this.props.activeTintColor} />
		return <BottomTabBar {...this.props} activeTintColor={this.props.theme} />
	}
}

const mapStateToProps = state => ({
	theme: state.theme.theme,
});
export default connect(mapStateToProps)(DynamicTabNavigator);