import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

const SignIn = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  return (
    <View>
      <Text>SignIn</Text>
    </View>
  )
}

export default SignIn