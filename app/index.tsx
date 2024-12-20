import { View, Image, SafeAreaView, ScrollView, Text } from 'react-native';

import 'react-native-reanimated';
import '../global.css';

import { useColorScheme } from '@/components/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';

function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  console.log('Current color scheme:', colorScheme); // Log the current theme

  return (
    <ThemeProvider value={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className="w-full justify-center items-center max-h-full px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />

            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[300px]"
              resizeMode='contain'
            />

            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold">Welcome to{' '}
                <Text className="text-secondary-200">Hequuuus</Text></Text>

              <Image
                source={images.path}
                className="w-[175px] h-[18px] absolute -bottom-4 -right-8"
                resizeMode='contain'
              />
            </View>
            <Text className="text-sm font-pregular 
            text-gray-100 mt-7 text-center">Because I LOOOOVE horse jumping
            </Text>

          </View>
            <CustomButton/>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;