import React, { useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import RNMapView, { Marker } from 'react-native-maps';
import { MapViewProps, ObstacleMarker } from './types';
import { ObstacleForm } from '../Obstacle/formObstacle';

export function MapView({ location, onSave }: MapViewProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCoordinates, setSelectedCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);
  const [markers, setMarkers] = useState<ObstacleMarker[]>([]); // Utilisation d'ObstacleMarker

  // Fonction déclenchée lorsqu'on clique sur la carte
  const handleMapPress = (e: any) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setSelectedCoordinates({ latitude, longitude });
    setModalVisible(true); // Ouvrir la modal
  };

  // Fonction pour sauvegarder le nouvel obstacle
  const handleSaveObstacle = (newObstacle: ObstacleMarker) => {
    if (!newObstacle.latitude || !newObstacle.longitude) {
      console.error('Les coordonnées de l\'obstacle sont manquantes.');
      return;
    }
    setMarkers((prevMarkers) => [...prevMarkers, newObstacle]); // Ajouter l'obstacle aux marqueurs existants
    setModalVisible(false); // Fermer la modal
  };

  return (
    <View style={styles.container}>
      {/* Carte interactive */}
      <RNMapView
        style={styles.map}
        region={location}
        onPress={handleMapPress}
      >
        {/* Affichage des marqueurs */}
        {markers.map((marker) => (
          <Marker
            key={marker.id_obstacle} // Utiliser l'ID unique de l'obstacle
            coordinate={{
              latitude: marker.latitude || 0, // Fournir une valeur par défaut
              longitude: marker.longitude || 0, // Fournir une valeur par défaut
            }}
            title={marker.name}
            description={`Type: ${marker.type}, Couleur: ${marker.color}`}
          />
        ))}
      </RNMapView>

      {/* Modal pour ajouter un obstacle */}
      <Modal visible={modalVisible} animationType="slide">
        {selectedCoordinates && (
          <ObstacleForm
            userId={1} // ID utilisateur actuel
            latitude={selectedCoordinates.latitude}
            longitude={selectedCoordinates.longitude}
            onClose={() => setModalVisible(false)} // Fermer la modal
            onSave={(obstacle: ObstacleMarker) => handleSaveObstacle(obstacle)} // Sauvegarder le nouvel obstacle
          />
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
