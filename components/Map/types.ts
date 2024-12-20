import { Region } from 'react-native-maps';

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface MapViewProps {
  location: Region;
  markers: Coordinate[];
  onMapPress: (e: any) => void;
  onSave: () => void;
}

export interface UseMapHookReturn {
  location: Region;
  markers: Coordinate[];
  handleMapPress: (e: any) => void;
}

export interface Obstacle {
  height: number;
  name: string;
  color: string;
  type: string;
  id_user: number;
}