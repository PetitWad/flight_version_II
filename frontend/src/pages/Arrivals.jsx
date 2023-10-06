import React, { useState, useEffect } from 'react';
import Content from '../components/content/Content';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { FaPlaneArrival } from 'react-icons/fa';

const apiUrl = 'http://localhost/php-api-fetch/controllers/readAll.php';

const Arrivals = () => {
  const [arrivalsData, setArrivalsData] = useState([]);
  const [isLoadingArrivals, setIsLoadingArrivals] = useState(true);
  const direction = "ARRIVALS";

  useEffect(() => {
    // Fonction asynchrone pour récupérer les données des arrivées
    const fetchArrivalsData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Réponse réseau non valide');
        }
        
        const data = await response.json(); // Convertir la réponse en JSON
        setArrivalsData(data[0]); // Mettre à jour avec le premier élément du tableau
        setIsLoadingArrivals(false);

      } catch (error) {
        setIsLoadingArrivals(false);
        // Gérer l'erreur ici si nécessaire
        console.error('Erreur lors de la récupération des données d\'arrivées :', error);
      }
    };

    fetchArrivalsData();
  }, []); 

  return (
    <>
      <Header typeVol={direction} logo={<FaPlaneArrival className="icon-color" />} />
      <Content data={arrivalsData} loading={isLoadingArrivals} />
      <Footer />
    </>
  );
};

export default Arrivals;