import { Link, Href } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { View, Image, SafeAreaView, ScrollView } from 'react-native';

import 'react-native-reanimated';
import "../global.css"

import { useColorScheme } from '@/components/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { images } from '@/constants';

function App() {
  const colorScheme = useColorScheme();
  console.log('Current color scheme:', colorScheme); // Log the current theme

  return (

    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className="w-full justify-center items-center max-h-full px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;