import './gesture-handler'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import * as TrackPlayer from 'react-native-track-player/src/trackPlayer'

TrackPlayer.registerPlaybackService(() => require('./service'))
AppRegistry.registerComponent(appName, () => App)
