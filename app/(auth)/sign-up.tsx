import { View, Text, useColorScheme, SafeAreaView, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { images } from '../../constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';
import { useUserContext } from '@/lib/userProvider';
import { supabase } from '@/lib/supabase';

const SignUp = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  const { setUser, setIsLogged } = useUserContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setform] = useState({
    username: '',
    email: '',
    password: '',
  })

  const submit = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            username: form.username, 
          },
        },
      });

      if (error) throw error;

      if (data.user) {
        setUser({
          id: data.user.id,
          email: data.user.email || '',
          username: form.username || '', 
        });
        setIsLogged(true);

        Alert.alert(
          'Success',
          'Your account has been created successfully. Please check your email to verify your account.'
        );
      }
    } catch (error) {
      Alert.alert('Error', (error as Error).message);
    }
  };

  return (
    <>
      <ThemeProvider value={theme}>
        <SafeAreaView className="flex-1 h-full" style={{ backgroundColor: theme.colors.background }}>
          <ScrollView>
            <View className="w-full justify-center h-full px-4 my-6">
              <Image source={colorScheme === 'dark' ? images.logoBlanc : images.logoNoir}
                resizeMode="contain"
                className="w-24 h-24" />
              <Text className="text-2xl text-white mt-10 font-psemibold">S'enregistrer sur Hequs</Text>

              <FormField
                title="Username"
                value={form.username}
                handleChangeText={(e) => setform({ ...form, username: e })}
                otherStyles="mt-10"
                placeholder={''}
              />

              <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e) => setform({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
                placeholder={''}
              />

              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e) => setform({ ...form, password: e })}
                otherStyles="mt-7"
                placeholder={''}
              />

              <CustomButton
                title={'Se Connecter'}
                handlePress={submit}
                containerStyles='w-full mt-7'
                isLoading={isSubmitting}
              />

              <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100">Vous avez déjà un compte ?</Text>
                <Link href='/sign-in' className="text-lg font-psemibold text-secondary">Se connecter</Link>
              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </ThemeProvider>
    </>

  )
}

export default SignUp