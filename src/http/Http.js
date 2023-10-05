import axios from 'axios';

const baseURL = 'http://example.com'; // Remplacez par l'URL de votre API PHP

const httpClient = axios.create({
  baseURL,
  timeout: 5000,
});

// Fonction pour récupérer la liste des vols depuis API PHP
export const getFlights = async () => {
  try {
    const response = await httpClient.get('/fichier_php.php'); // Remplacez par le chemin de votre fichier PHP
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des vols :', error);
    throw error;
  }
};

// Ajoutez d'autres fonctions pour gérer d'autres opérations sur votre API si nécessaire
