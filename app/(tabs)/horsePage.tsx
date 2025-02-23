import React, { useState } from "react";
import { View, Button, Alert, SafeAreaView, ScrollView } from "react-native";
import FormField from "@/components/FormField";
import { supabase } from "@/lib/supabase";
import CustomButton from "@/components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HorseCarousel from "@/components/HorseCaroussel";

const AddHorseForm = () => {
  const [form, setform] = useState({
    name: "",
    age: "",
    breed: "",
    max_jump_height: "",
    description: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    const { data, error } = await supabase
      .from("horse")
      .insert([
        {
          name: form.name,
          age: form.age,
          breed: form.breed,
          max_jump_height: form.max_jump_height,
          description: form.description,
        },
      ])
      .select();

    if (error) {
      Alert.alert("Erreur", error.message);
    } else {
      Alert.alert("Succès", "Cheval ajouté avec succès");
      setform({
        name: "",
        age: "",
        breed: "",
        max_jump_height: "",
        description: "",
      });
    }
    setSubmitting(false);
  };

  return (
    <>
      <SafeAreaView className="flex-1 h-full">
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          enableOnAndroid={true}
          enableAutomaticScroll={true}
          extraScrollHeight={100}
        >
          <View className="w-full justify-center h-full px-4 my-6">
            <FormField
              title="Nom"
              value={form.name}
              handleChangeText={(e) => setform({ ...form, name: e })}
              otherStyles="mt-7"
              keyboardType="default"
              placeholder={""}
            />
            <FormField
              title="Âge"
              value={form.age}
              handleChangeText={(e) => setform({ ...form, age: e })}
              otherStyles="mt-7"
              keyboardType="numeric"
              placeholder={""}
            />
            <FormField
              title="Race"
              value={form.breed}
              handleChangeText={(e) => setform({ ...form, breed: e })}
              otherStyles="mt-7"
              keyboardType="default"
              placeholder={""}
            />
            <FormField
              title="Hauteur de saut max"
              value={form.max_jump_height}
              handleChangeText={(e) => setform({ ...form, max_jump_height: e })}
              otherStyles="mt-7"
              keyboardType="numeric"
              placeholder={""}
            />
            <FormField
              title="Description"
              value={form.description}
              handleChangeText={(e) => setform({ ...form, description: e })}
              otherStyles="mt-7"
              keyboardType="default"
              placeholder={""}
              multiline
            />
            <CustomButton
              title={"Ajouter un cheval"}
              handlePress={handleSubmit}
              containerStyles="w-full mt-7"
              isLoading={isSubmitting}
            />
            <HorseCarousel />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default AddHorseForm;
