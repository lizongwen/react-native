/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
// import App from './App';
import AppNavigator from './js/navigator/AppNavigator';
// import WelcomePage from './js/page/WelcomePage';

AppRegistry.registerComponent(appName, () => AppNavigator);
