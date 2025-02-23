import React, { useState, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { supabase } from "@/lib/supabase";
import Carousel from "react-native-reanimated-carousel";

const { width: screenWidth } = Dimensions.get("window");

const HorseCarousel = () => {
  const [horses, setHorses] = useState<
    {
      name: string;
      age: number;
      breed: string;
      max_jump_height: number;
      description: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchHorses = async () => {
      const { data, error } = await supabase.from("horse").select("*");

      if (error) {
        console.error(
          "Erreur lors de la récupération des chevaux :",
          error.message
        );
      } else {
        setHorses(data);
      }
    };

    fetchHorses();
  }, []);

  const renderItem = ({
    item,
  }: {
    item: {
      name: string;
      age: number;
      breed: string;
      max_jump_height: number;
      description: string;
    };
  }) => (
    <View className="bg-white rounded-lg p-5 shadow-md">
      <Text className="text-2xl font-bold mb-2">{item.name}</Text>
      <Text>Âge : {item.age}</Text>
      <Text>Race : {item.breed}</Text>
      <Text>Hauteur de saut max : {item.max_jump_height}</Text>
      <Text>Description : {item.description}</Text>
    </View>
  );

  return (
    <View className="flex-1 justify-center items-center">
      <Carousel
        width={screenWidth}
        height={screenWidth * 0.8}
        data={horses}
        renderItem={renderItem}
        loop={true}
      />
    </View>
  );
};

export default HorseCarousel;
