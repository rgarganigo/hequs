// ChevalList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import { supabase } from '../../lib/supabase';
import { useNavigation } from '@react-navigation/native'; 

const ChevalList = () => {
  const [chevaux, setChevaux] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // Fonction pour récupérer les chevaux depuis Supabase
  const fetchChevaux = async () => {
    try {
      let { data, error } = await supabase
        .from('horse')
        .select('name, age, description')

      if (error) {
        console.error('Erreur lors de la récupération des chevaux:', error);
      } else {
        setChevaux(data);
      }
    } catch (error) {
      console.error('Erreur inconnue:', error);
    } finally {
      setLoading(false);
    }
    console.log("chevaux : ", data)
  };

  useEffect(() => {
    fetchChevaux();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
        <Button
        title="Ajouter un Cheval"
        onPress={() => navigation.navigate('AddHorse')}  
      />
      <FlatList
        data={chevaux} 
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Description: {item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ChevalList;
