import React, { useState, useEffect } from 'react';
import Content from '../components/content/Content';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { FaPlaneArrival } from 'react-icons/fa';

// const apiUrl = 'https://flightsystem.atalou.info/php-api-fetch/src/api/allArrivals.php';
const apiUrl = 'http://localhost/flight_version_II/php-api-fetch/src/api/allArrivals.php';

const Arrivals = () => {
  const [arrivalsData, setArrivalsData] = useState([]);
  const [isLoadingArrivals, setIsLoadingArrivals] = useState(true);
  const direction = "ARRIVALS";

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Réponse réseau non valide');
      }

      const data = await response.json();
      setArrivalsData(data[0]);
      setIsLoadingArrivals(false);
    } catch (error) {
      setIsLoadingArrivals(false);
      console.error('Erreur lors de la récupération des données d\'arrivées:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts

    // Periodically refresh the data every 60 seconds in milisecond
    const refreshInterval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(refreshInterval);
    };
  }, []);

  return (
    <>
      <Header typeVol={direction} logo={<FaPlaneArrival className="icon-color" />} />
      <Content data={arrivalsData} loading={isLoadingArrivals} typeVol={direction} />
      <Footer />
    </>
  );
};

export default Arrivals;
