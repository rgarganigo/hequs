import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import RNMapView, { Marker } from 'react-native-maps';
import { MapViewProps } from './types';

export function MapView({ location, markers, onMapPress, onSave }: MapViewProps) {
  return (
    <View style={styles.container}>
      <RNMapView
        style={styles.map}
        region={location}
        onPress={onMapPress}
      >
        {markers.map((marker: any, index: any) => (
          <Marker
            key={index}
            coordinate={marker}
          />
        ))}
      </RNMapView>

      {/* Boutons au-dessus de la carte */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={onSave}>
          <Text style={styles.buttonText}>Sauvegarder</Text>
        </TouchableOpacity>
      </View>
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
  controls: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
