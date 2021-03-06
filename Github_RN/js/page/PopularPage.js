import React, { Component } from 'react';
import { FlatList,ActivityIndicator, StyleSheet, Text, View, Button, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import actions from '../action/index';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import Toast from 'react-native-easy-toast';
import PopularItem from '../common/PopularItem';


const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'green';
const pageSize = 10;
class PopularTab extends Component {
	constructor(props) {
		super(props);
		const { tabLabel } = this.props;
		this.storeName = tabLabel;
	}
	componentDidMount() {
		this.loadData();
	}
	loadData(loadMore) {
		const { onRefreshPopular, onLoadMorePopular } = this.props;
		const store = this._store();
		const url = this.genFetchUrl(this.storeName);
		if (!loadMore) {
			onLoadMorePopular(this.storeName, ++store.pageIndex, pageSize, store.items, callback => {
				this.refs.toast.show('没有更多了');
			});
		} else {
			onRefreshPopular(this.storeName, url, pageSize);
		}
	}

	/**
     * 获取与当前页面有关的数据
     * @returns {*}
     * @private
     */
	_store() {
		const { popular } = this.props;
		let store = popular[this.storeName];
		if (!store) {
			store = {
				items: [],
				isLoading: false,
				projectModels: [],//要显示的数据
				hideLoadingMore: true,//默认隐藏加载更多
			}
		}
		return store;
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
	genIndicator() {
		return this._store().hideLoadingMore ? null :
			<View style={styles.indicatorContainer}>
				<ActivityIndicator
					style={styles.indicator}
				/>
				<Text>正在加载更多</Text>
			</View>
	}
	render() {
		const { popular } = this.props;
		let store = this._store();
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
					data={store.projectModels}
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
					ListFooterComponent={() => this.genIndicator()}
					onEndReached={() => {
                        console.log('---onEndReached----');
                        setTimeout(() => {
                            if (this.canLoadMore) {//fix 滚动时两次调用onEndReached https://github.com/facebook/react-native/issues/14015
                                this.loadData(true);
                                this.canLoadMore = false;
                            }
                        }, 100);
					}}
					onEndReachedThreshold={0.5}
					onMomentumScrollBegin={() => {
                        this.canLoadMore = true; //fix 初始化时页调用onEndReached的问题
                        console.log('---onMomentumScrollBegin-----')
                    }}
				/>
				<Toast ref={'toast'}
					position={'center'}
				/>
			</View>
		);
	}
}
const mapStateToProps = state => ({
	popular: state.popular
});
const mapDispatchToprops = dispatch => ({
	onRefreshPopular: (storeName, url, pageSize) => dispatch(actions.onRefreshPopular(storeName, url, pageSize)),
	onLoadMorePopular: (storeName, pageIndex, pageSize, items, callBack) => dispatch(actions.onLoadMorePopular(storeName, pageIndex, pageSize, items, favoriteDao, callBack)),
	// onFlushPopularFavorite: (storeName, pageIndex, pageSize, items, favoriteDao) => dispatch(actions.onFlushPopularFavorite(storeName, pageIndex, pageSize, items, favoriteDao)),
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
	indicatorContainer: {
        alignItems: "center"
    },
	indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
    }
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
