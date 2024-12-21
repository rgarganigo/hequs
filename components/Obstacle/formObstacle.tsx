import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ObstacleFormProps } from '../Map/types'; // Assurez-vous d'importer l'interface correctement
import { addObstacle } from '../Obstacle/useObstacle';

export function ObstacleForm({ userId, latitude, longitude, onClose, onSave }: ObstacleFormProps) {
  const [height, setHeight] = useState('');
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async () => {
    const heightValue = parseFloat(height);

    const obstacle = {
      height: heightValue,
      name,
      color,
      type,
      id_user: userId,
      latitude,
      longitude,
    };

    const result = await addObstacle(obstacle);
    if (result.success && result.data && result.data.length > 0) { // Vérifiez que data est défini et contient des éléments
      onSave(result.data[0]); // Utilisez le premier élément des données retournées
      setHeight('');
      setName('');
      setColor('');
      setType('');
      onClose(); // Fermez la modal après succès
    } else {
      alert(result.message || 'Une erreur est survenue lors de l\'ajout de l\'obstacle.');
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
      <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
        <Text style={styles.buttonText}>Annuler</Text>
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
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: '#FF0000',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
