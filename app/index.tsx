import { View, Image, SafeAreaView, ScrollView, Text } from 'react-native';

import 'react-native-reanimated';
import '../global.css';

import { useColorScheme } from '@/components/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  console.log('Current color scheme:', colorScheme); // Log the current theme

  return (
    <ThemeProvider value={theme}>
      <SafeAreaView className="flex-1 h-full" style={{ backgroundColor: theme.colors.background }}>
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className="w-full justify-center items-center min-h-[63vh] px-4">
            <Image
              source={colorScheme === 'dark' ? images.logoBlanc : images.logoNoir}
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
          
          <CustomButton 
          title={'Continue with Email'} 
          handlePress={() => router.push('/sign-in')}
          containerStyles='w-full mt-7'
          />
        </ScrollView>
       <StatusBar backgroundColor='#161622'
       style='light'/> 
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;