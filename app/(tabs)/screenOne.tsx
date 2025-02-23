import React, { useRef } from "react";
import { View, StyleSheet, Text, Animated, TouchableOpacity } from "react-native";

const ObstacleDemo = () => {
  const barYPosition = useRef(new Animated.Value(150)).current; // Position initiale de la barrière

  // Fonction pour animer la barrière à une hauteur spécifique
  const animateBar = (newYPosition: number) => {
    Animated.timing(barYPosition, {
      toValue: newYPosition, // Position cible
      duration: 1000, // Durée de l'animation en millisecondes
      useNativeDriver: false, // Nécessaire pour les animations de layout
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Démonstration : Barrière d'équitation</Text>

      {/* Barrière */}
      <View style={styles.scene}>
        {/* Poteaux */}
        <View style={[styles.pole, { left: 50 }]} /> {/* Poteau gauche */}
        <View style={[styles.pole, { left: 330 }]} /> {/* Poteau droit */}

        {/* Barrière animée */}
        <Animated.View style={[styles.bar, { top: barYPosition }]} />
      </View>

      {/* Boutons pour ajuster la hauteur */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => animateBar(50)} // Hauteur haute
        >
          <Text style={styles.buttonText}>Hauteur 1 (50 cm)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => animateBar(150)} // Hauteur moyenne
        >
          <Text style={styles.buttonText}>Hauteur 2 (150 cm)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => animateBar(250)} // Hauteur basse
        >
          <Text style={styles.buttonText}>Hauteur 3 (250 cm)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: "#FA8E61",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  scene: {
    height: 300,
    backgroundColor: "#18181A",
    borderWidth: 1,
    borderColor: "#000",
    position: "relative",
    alignSelf: "center",
    width: 400,
  },
  pole: {
    position: "absolute",
    width: 20,
    height: 250,
    backgroundColor: "#8B4513", // Couleur marron pour les poteaux
    top: 50,
  },
  bar: {
    position: "absolute",
    width: 260, // Largeur de la barre entre les poteaux
    height: 10,
    backgroundColor: "#FA8E61", // Couleur orange pour la barrière
    left: 70,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FA8E61",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ObstacleDemo;
