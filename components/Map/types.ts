import { Region } from 'react-native-maps';

// Marqueur complet avec tous les détails pour affichage sur la carte
export interface ObstacleMarker {
  id_obstacle?: number;
  latitude?: number;    
  longitude?: number;   
  height: number;
  name: string;
  color: string;
  type: string;
  id_user: number;
}

// Props pour MapView
export interface MapViewProps {
  location: Region;
  markers: ObstacleMarker[];
  onMapPress: (e: any) => void;
  onSave: () => void;
}

// Retour du hook pour gérer la carte
export interface UseMapHookReturn {
  location: Region;
  markers: ObstacleMarker[];
  handleMapPress: (e: any) => void;
}

// Modèle de base d'un obstacle
export interface Obstacle {
  id_obstacle?: number; // Optionnel car l'ID n'existe pas encore lors de la création
  height: number;
  name: string;
  color: string;
  type: string;
  id_user: number;
  latitude?: number; // Optionnel pour flexibilité
  longitude?: number; // Optionnel pour flexibilité
}

// Props pour ObstacleForm
export interface ObstacleFormProps {
  userId: number;
  latitude: number;
  longitude: number;
  onClose: () => void; // Fonction pour fermer la modal
  onSave: (obstacle: ObstacleMarker) => void; // Fonction pour sauvegarder un obstacle
}
