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
   let [fontsLoaded, error] = useFonts({
    Inter_400Regular: require('./assets/fonts/Inter-Regular.ttf'),
    Inter_500Medium: require('./assets/fonts/Inter-Medium.ttf'),
  });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

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