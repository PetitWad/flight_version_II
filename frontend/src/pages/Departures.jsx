import React, { useState, useEffect } from 'react';
import Content from '../components/content/Content';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { FaPlaneDeparture } from 'react-icons/fa';

const apiUrl = 'http://localhost/flight_version_II/php-api-fetch/src/api/allDepartures.php';

const Departures = () => {
  const [departuresData, setDeparturesData] = useState([]);
  const [isLoadingDepartures, setIsLoadingDepartures] = useState(true);
  const direction = "DEPARTURES";


  useEffect(() => {
    // Fonction asynchrone pour récupérer les données des arrivées
    const fetchDeparturesData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Réponse réseau non valide');
        }
        
        const data = await response.json(); // Convertir la réponse en JSON
        setDeparturesData(data[0]); // Mettre à jour avec le premier élément du tableau
        setIsLoadingDepartures(false);

      } catch (error) {
        setIsLoadingDepartures(false);
        // Gérer l'erreur ici si nécessaire
        console.error('Erreur lors de la récupération des données d\'arrivées :', error);
      }
    };

    fetchDeparturesData();
  }, []); 

  return (
    <>
      <Header typeVol={direction} logo={<FaPlaneDeparture className="icon-color" />} />
      <Content data={departuresData} loading={isLoadingDepartures} typeVol={direction} />
      <Footer />
    </>
  );
};

export default Departures;
