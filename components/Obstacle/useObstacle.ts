import { supabase } from '../../lib/supabase';

interface Obstacle {
  id_obstacle: any;
  latitude: any;
  longitude: any;
  height: number;
  name: string;
  color: string;
  type: string;
  id_user: number; // Id de l'utilisateur à associer
}

export async function addObstacle(obstacle: Obstacle): Promise<{ success: boolean; data?: Obstacle[]; message?: string }> {
  try {
    // Vérification de l'existence de l'utilisateur
    const { data: user, error: userError } = await supabase
      .from('appuser')
      .select('id_user')
      .eq('id_user', obstacle.id_user)
      .single();

    if (userError) {
      console.error('Utilisateur introuvable ou erreur lors de la vérification :', userError.message);
      return { success: false, message: 'Utilisateur introuvable.' };
    }

    // Insertion de l'obstacle
    const { data, error } = await supabase
      .from('obstacle')
      .insert([obstacle])
      .select();

    if (error) {
      console.error('Erreur lors de l\'ajout de l\'obstacle :', error.message);
      return { success: false, message: error.message };
    }

    return { success: true, data }; // Retourne les données insérées si tout va bien
  } catch (err) {
    console.error('Erreur inattendue :', err);
    return { success: false, message: 'Erreur inattendue.' };
  }
}