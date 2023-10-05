import React from 'react';
import Content from '../components/content/Content';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { FaPlaneArrival } from 'react-icons/fa';

const Departures = () => {
  const arrivalsData = [
    { sigle_airline:'AAL', flight: 'FL001', to: 'Destination A', time: '10:00 AM', status: 'On Time' },
    { sigle_airline:'IWY', flight: 'FL002', to: 'Destination B', time: '11:30 AM', status: 'Delayed' },
    { sigle_airline:'NKS', flight: 'FL003', to: 'Destination C', time: '1:45 PM', status: 'On Time' },
    { sigle_airline:'JBU', flight: 'FL004', to: 'Destination D', time: '3:15 PM', status: 'Delayed' },
    { sigle_airline:'CEY', flight: 'FL005', to: 'Destination E', time: '4:30 PM', status: 'On Time' },
    { sigle_airline:'FWI', flight: 'FL006', to: 'Destination F', time: '6:00 PM', status: 'Delayed' },
    { sigle_airline:'TSC', flight: 'FL007', to: 'Destination G', time: '7:30 PM', status: 'On Time' },
    { sigle_airline:'KSZ', flight: 'FL008', to: 'Destination H', time: '8:45 PM', status: 'On Time' },
    { sigle_airline:'CMP', flight: 'FL009', to: 'Destination I', time: '10:15 PM', status: 'Delayed' },
    { sigle_airline:'DAL', flight: 'FL010', to: 'Destination J', time: '11:00 AM', status: 'On Time' },
    { sigle_airline:'ACA', flight: 'FL011', to: 'Destination K', time: '12:30 PM', status: 'Delayed' },
    { sigle_airline:'AFA', flight: 'FL012', to: 'Destination L', time: '2:15 PM', status: 'On Time' },
    { sigle_airline:'SHH', flight: 'FL013', to: 'Destination M', time: '4:00 PM', status: 'On Time' },
    { sigle_airline:'FWI', flight: 'FL014', to: 'Destination N', time: '5:30 PM', status: 'Delayed' },
    
  ];
const isLoadingDepartures = false; 
const direction = "ARRIVALS";
  return ( 
    <>
    <Header typeVol={direction} logo={ <FaPlaneArrival className="icon-color" />} />
     <Content data={arrivalsData} loading={isLoadingDepartures} /> 
     <Footer />
     </>
  );
};

export default Departures;
