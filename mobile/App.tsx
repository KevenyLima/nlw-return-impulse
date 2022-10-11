import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts
} from '@expo-google-fonts/inter';
import 'react-native-gesture-handler';
import Widget from './src/components/Widget';
import { theme } from './src/theme';
import './assets/fonts/Inter-Regular.ttf'
export default function App() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
            }}
        >
            <StatusBar
                style="light"
                backgroundColor="transparent"
                translucent
            />
            <Widget />
        </View>
    );
}