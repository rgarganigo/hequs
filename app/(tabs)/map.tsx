import React from "react";
import { MapView } from "../../components/Map/MapView";
import { useMap } from "../../components/Map/useMap";
import { addObstacle } from "../../components/Obstacle/useObstacle";

export default function MapScreen() {
  const { location, markers, handleMapPress } = useMap();

  // Fonction pour sauvegarder les marqueurs dans Supabase
  const handleSaveMarkers = async () => {
    try {
      if (markers.length === 0) {
        alert("Aucun marqueur à sauvegarder.");
        return;
      }

      // Sauvegarde de chaque marqueur comme un obstacle
      for (const marker of markers) {
        const obstacle = {
          height: 1, // Par défaut, vous pouvez ajuster cette valeur ou ajouter un champ pour cela
          name: "Obstacle sans nom",
          color: "Inconnu",
          type: "Standard",
          id_user: 1, // Associez dynamiquement l'utilisateur ici
          id_obstacle: null, // Assign a default value or generate an ID if necessary
          latitude: marker.latitude,
          longitude: marker.longitude,
        };
        await addObstacle(obstacle);
        console.log("Données insérées :", obstacle);
      }

      alert("Marqueurs sauvegardés avec succès !");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde :", error);
      alert("Une erreur est survenue lors de la sauvegarde.");
    }
  };

  return (
    <MapView
      location={location}
      markers={markers}
      onMapPress={handleMapPress}
      onSave={handleSaveMarkers} // Associe la fonction à la méthode onSave
    />
  );
}
