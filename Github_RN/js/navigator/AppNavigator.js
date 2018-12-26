import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';
import { connect } from 'react-redux';
import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers'

export const rootCom = 'Init';
const InitNavigator = createStackNavigator({
	WelcomePage: {
		screen: WelcomePage,
		navigationOptions: {
			header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
		}
	}
});
const MainNavigator = createStackNavigator({
	HomePage: {
		screen: HomePage,
		navigationOptions: {
			header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
		}
	},
	DetailPage: {
		screen: DetailPage,
		navigationOptions: {

		}
	}
});
export const RootNavigator = createAppContainer(createSwitchNavigator({
	Init: InitNavigator,
	Main: MainNavigator,
}, {
		defaultNavigationOptions: {
			header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
		}
	}));
//第一步
export const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);
//第二步
const AppWithNavigationState = reduxifyNavigator(RootNavigator, "root");
//第三步
const mapStatetoProps = (state) => {
	return { state: state.nav }
}
//第四步
export default connect(mapStatetoProps)(AppWithNavigationState);