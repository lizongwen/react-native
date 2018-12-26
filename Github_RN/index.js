/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
// import App from './App';
// import AppNavigator from './js/navigator/AppNavigator';
import WelcomePage from './js/App';

// AppRegistry.registerComponent(appName, () => AppNavigator);
AppRegistry.registerComponent(appName, () => App);
