// AjouterCheval.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { supabase } from '../../lib/supabase';

const AjouterCheval = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');

  const addCheval = async () => {
    try {
      const { data, error } = await supabase
        .from('horse')
        .insert([{ name, age, description }]);

      if (error) {
        console.error('Erreur lors de l\'ajout du cheval:', error);
      } else {
        navigation.goBack(); // Retour à la liste des chevaux après ajout
      }
    } catch (error) {
      console.error('Erreur inconnue:', error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Ajouter un Cheval</Text>
      <TextInput
        placeholder="Nom du cheval"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Âge"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ marginBottom: 20, borderWidth: 1, padding: 10 }}
      />
      <Button title="Ajouter" onPress={addCheval} />
    </View>
  );
};

export default AjouterCheval;
