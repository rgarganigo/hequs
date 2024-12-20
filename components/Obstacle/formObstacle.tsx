import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { addObstacle } from '../Obstacle/useObstacle';

export function ObstacleForm({ userId }: { userId: number }) {
  const [height, setHeight] = useState('');
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async () => {
    const heightValue = 1.5;

    // Validation des champs
    if (isNaN(heightValue) || heightValue <= 0) {
      alert("Veuillez entrer une hauteur valide et positive !");
      return;
    }
    if (!name.trim()) {
      alert("Veuillez entrer un nom pour l'obstacle !");
      return;
    }
    if (!color.trim()) {
      alert("Veuillez entrer une couleur pour l'obstacle !");
      return;
    }
    if (!type.trim()) {
      alert("Veuillez entrer un type pour l'obstacle !");
      return;
    }

    const obstacle = {
      height: heightValue,
      name,
      color,
      type,
      id_user: userId,
    };

    // Envoi des données à Supabase
    const result = await addObstacle(obstacle);
    if (result) {
      alert('Obstacle ajouté avec succès !');
      setHeight('');
      setName('');
      setColor('');
      setType('');
    } else {
      alert("Une erreur est survenue lors de l'ajout de l'obstacle.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom de l'obstacle :</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nom"
      />

      <Text style={styles.label}>Hauteur :</Text>
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={setHeight}
        placeholder="Hauteur"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Couleur :</Text>
      <TextInput
        style={styles.input}
        value={color}
        onChangeText={setColor}
        placeholder="Couleur"
      />

      <Text style={styles.label}>Type :</Text>
      <TextInput
        style={styles.input}
        value={type}
        onChangeText={setType}
        placeholder="Type"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Ajouter Obstacle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
