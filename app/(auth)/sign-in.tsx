import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useUserContext } from "@/lib/userProvider";

const SignIn = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  const { setUser, setIsLogged } = useUserContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setform] = useState({
    email: "cacahuetes.morais@gmail.com", // A CHANGER NOT SAFE
    password: "passwordTest", // MDR
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      if (error) throw error;

      setUser(data.user);
      setIsLogged(true);
      Alert.alert("Success", "You are logged in");
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ThemeProvider value={theme}>
        <SafeAreaView
          className="flex-1 h-full"
          style={{ backgroundColor: theme.colors.background }}
        >
          <ScrollView>
            <View className="w-full justify-center h-full px-4 my-6">
              <Image
                source={
                  colorScheme === "dark" ? images.logoBlanc : images.logoNoir
                }
                resizeMode="contain"
                className="w-24 h-24"
              />
              <Text className="text-2xl text-white mt-10 font-psemibold">
                Se connecter avec votre compte Hequs
              </Text>

              <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e) => setform({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
                placeholder={""}
              />

              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e) => setform({ ...form, password: e })}
                otherStyles="mt-7"
                placeholder={""}
              />

              <CustomButton
                title={"Se Connecter"}
                handlePress={submit}
                containerStyles="w-full mt-7"
                isLoading={isSubmitting}
              />

              <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100">
                  Vous n'avez pas de compte ?
                </Text>
                <Link
                  href="/sign-up"
                  className="text-lg font-psemibold text-secondary"
                >
                  Créer un compte
                </Link>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default SignIn;
