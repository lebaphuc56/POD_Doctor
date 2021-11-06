/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeActivity from './screens/user/HomeActivity';
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => HomeActivity);
