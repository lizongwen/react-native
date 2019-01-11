import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import actions from '../action/index';
import PopularItem from '../common/PopularItem';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'green'
class PopularTab extends Component {
	constructor(props) {
		super(props);
		const { tabLabel } = this.props;
		this.storeName = tabLabel;
	}
	componentDidMount() {
		this.loadData();
	}
	loadData() {
		const { onLoadPopularData } = this.props;
		const url = this.genFetchUrl(this.storeName);
		onLoadPopularData(this.storeName, url);
	}
	genFetchUrl(key) {
		return URL + key + QUERY_STR;
	}
	renderItem(data) {
		const item = data.item
		// return <View style={{marginBottom:10}}>
		// 	<Text style={{backgroundColor:'#faa'}}>
		// 		{JSON.stringify(item)}
		// 	</Text>
		// </View>
		return <PopularItem
			item={item}
			onSelect={() => {

			}}
		/>
	}
	render() {
		const { popular } = this.props;
		let store = popular[this.storeName];
		if (!store) {
			store = {
				items: [],
				isLoading: false
			}
		}
		return (
			<View style={styles.container}>
				{/* <Text style={styles.welcome}>{tabLabel}</Text> */}
				{/* <Text onPress={() => {
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
				<Button 
					title={"离线缓存框架"}
					onPress={() => {
					NavigationUtil.goPage({ aa: 111 }, 'DataStorageDemoPage')
				}}/> */}
				<FlatList
					data={store.items}
					renderItem={data => this.renderItem(data)}
					keyExtractor={item => "" + item.id}
					refreshControl={
						<RefreshControl
							title={'loading'}
							titleColor={THEME_COLOR}
							colors={[THEME_COLOR]}
							refreshing={store.isLoading}
							onRefresh={() => this.loadData()}
							tintColor={THEME_COLOR}
						/>
					}
				/>
			</View>
		);
	}
}
const mapStateToProps = state => ({
	popular: state.popular
});
const mapDispatchToprops = dispatch => ({
	onLoadPopularData: (storeName, url) => dispatch(actions.onLoadPopularData(storeName, url))
})
const PopularTabPage = connect(mapStateToProps, mapDispatchToprops)(PopularTab);

export default class PopularPage extends Component {
	constructor(props) {
		super(props);
		this.tabNames = ['React', 'React-Native'];
	}
	_genTabs() {
		const tabs = {};
		this.tabNames.forEach((item, index) => {
			tabs[`tab${index}`] = {
				screen: props => <PopularTabPage {...props} tabLabel={item} />,//传递参数到组件
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
					indicatorStyle: styles.indicatorStyle,//标签下面横线颜色
					labelStyle: styles.labelStyle//文字颜色
				}
			}
		))
		return <View style={{ flex: 1 }}>
			<TabNavigatior />
		</View>;
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		// backgroundColor: '#F5FCFF',
	},
	// welcome: {
	// 	fontSize: 20,
	// 	textAlign: 'center',
	// 	margin: 10,
	// },
	// tabStyle: {
	// 	minWidth: 50
	// },
	// indicatorStyle: {
	// 	height: 2,
	// 	backgroundColor: '#fff'
	// },
	// labelStyle: {
	// 	fontSize: 13,
	// 	marginTop: 6,
	// 	marginBottom: 6
	// }
});
