import React from 'react';
import Content from '../components/content/Content';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { FaPlaneDeparture } from 'react-icons/fa';
const Departures = () => {
  const departuresData = [
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg',  flight: 'FL001', airline: 'Airline A', to: 'Destination A', time: '10:00 AM', status: 'On Time' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL002', airline: 'Airline B', to: 'Destination B', time: '11:30 AM', status: 'Delayed' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL003', airline: 'Airline C', to: 'Destination C', time: '1:45 PM', status: 'On Time' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL004', airline: 'Airline D', to: 'Destination D', time: '3:15 PM', status: 'Delayed' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL005', airline: 'Airline E', to: 'Destination E', time: '4:30 PM', status: 'On Time' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL006', airline: 'Airline F', to: 'Destination F', time: '6:00 PM', status: 'Delayed' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL007', airline: 'Airline G', to: 'Destination G', time: '7:30 PM', status: 'On Time' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL008', airline: 'Airline H', to: 'Destination H', time: '8:45 PM', status: 'On Time' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL009', airline: 'Airline I', to: 'Destination I', time: '10:15 PM', status: 'Delayed' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL010', airline: 'Airline J', to: 'Destination J', time: '11:00 AM', status: 'On Time' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL011', airline: 'Airline K', to: 'Destination K', time: '12:30 PM', status: 'Delayed' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL012', airline: 'Airline L', to: 'Destination L', time: '2:15 PM', status: 'On Time' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL013', airline: 'Airline M', to: 'Destination M', time: '4:00 PM', status: 'On Time' },
    { airlineImage:'https://zizonline.com/wp-content/uploads/2023/02/INTERCARIBBEAN-LOGO.jpg', flight: 'FL014', airline: 'Airline N', to: 'Destination N', time: '5:30 PM', status: 'Delayed' },
    
  ];
const isLoadingDepartures = false; 
const direction = "DEPARTURES";
  return ( 
    <>
     <Header typeVol={direction} logo={ <FaPlaneDeparture className="icon-color" />} />
     <Content data={departuresData} loading={isLoadingDepartures}  /> 
     <Footer />
     </>
  );
};

export default Departures;
