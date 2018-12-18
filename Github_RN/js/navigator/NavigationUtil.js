export default class NavigationUtil {
	/**
	 * 跳转到主页
	 * @param {要传递的参数} params 
	 */
	static resetToHomePage(params) {
		const { navigation } = params
		navigation.navigate("Main");
	}
	/**
	 * 返回上一页
	 * @param {要传递的导航器} navigation 
	 */
	static goBack(navigation) {
		navigation.goBack();
	}
	/**
	 * 跳转到指定页面
	 * @param {要传递的参数} params
	 * @param {要跳转的页面} page 
	 */
	static goPage(params,page) {
		const  navigation  = NavigationUtil.navigation;
		console.log(navigation)
		if (!navigation) {
			console.log('NavigationUtil.navigation can not be null');
			return;
		}
		navigation.navigate(page);
		// navigation.navigate(page,{
		// 	...params
		// });
	}
}