import { supabase } from '../../lib/supabase';

interface Obstacle {
  height: number;
  name: string;
  color: string;
  type: string;
  id_user: number; // Id de l'utilisateur à associer
}

export async function addObstacle(obstacle: Obstacle) {
  const { data, error } = await supabase.from('obstacle').insert([obstacle]);

  if (error) {
    // console.error('Erreur lors de l\'ajout de l\'obstacle :', error.message);
    return null;
  }

  console.log('Obstacle ajouté avec succès :', data);
  return data;
}
