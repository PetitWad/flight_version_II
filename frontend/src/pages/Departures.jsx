import React, { useState, useEffect } from 'react';
import Content from '../components/content/Content';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { FaPlaneDeparture } from 'react-icons/fa';

const apiUrl = 'https://flightsystem.atalou.info/php-api-fetch/src/api/allDepartures.php';
// const apiUrl = 'http://localhost/flight_version_II/php-api-fetch/src/api/allDepartures.php';
const Departures = () => {
  const [departuresData, setDeparturesData] = useState([]);
  const [isLoadingDepartures, setIsLoadingDepartures] = useState(true);
  const direction = "DEPARTURES";

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Réponse réseau non valide');
      }

      const data = await response.json();
      setDeparturesData(data[0]);
      setIsLoadingDepartures(false);
    } catch (error) {
      setIsLoadingDepartures(false);
      console.error('Erreur lors de la récupération des données de départs:', error);
    }
  };

  console.log(fetchData);

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts

    // Periodically refresh the data every 30 sa seconds in milisecond
    const refreshInterval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(refreshInterval);
    };
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
