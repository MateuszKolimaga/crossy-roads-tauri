import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';

import App from './Crossy';

if (__DEV__) {
    activateKeepAwake();
}

registerRootComponent(App);
