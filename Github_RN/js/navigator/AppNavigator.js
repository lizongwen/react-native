import { createStackNavigator, createSwitchNavigator, createAppContainer} from "react-navigation";
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';

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
});
export default createAppContainer(createSwitchNavigator({
	Init: InitNavigator,
	Main: MainNavigator,
}, {
		defaultNavigationOptions: {
			header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
		}
	}));