import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { ObstacleMarker, UseMapHookReturn } from './types';

export function useMap(): UseMapHookReturn {
  const [location, setLocation] = useState({
    latitude: 48.8566,
    longitude: 2.3522,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [markers, setMarkers] = useState<ObstacleMarker[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        ...location,
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    })();
  }, []);

  const handleMapPress = (e: { nativeEvent: { coordinate: ObstacleMarker } }) => {
    const { coordinate } = e.nativeEvent;
    setMarkers([...markers, { ...coordinate, name: 'Nouveau', color: 'Inconnu', type: 'Standard' }]); // Exemple avec des valeurs par défaut
  };  

  return {
    location,
    markers,
    handleMapPress,
  };
}