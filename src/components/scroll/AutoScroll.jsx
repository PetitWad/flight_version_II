import React, { useState, useEffect } from 'react';
import { logos } from '../../data/AirlineLogo';
import { getLogoUrlByAirline } from '../../config/config';
import './autoScroll.css';
import './animate.css';
import plane from '../../assets/img/plane.png';
import { Element, scroller } from 'react-scroll';

const AutoScroll = ({ data, loading }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!loading && data && data.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex + 5 < data.length ? prevIndex + 5 : 0
                );
            }, 7000); // Change the scrolling interval as needed (7000ms = 7 seconds)

            return () => clearInterval(interval);
        }
    }, [data, loading]);

    if (loading) {
        return <div className="item-error">Data Loading....</div>;
    }

    if (!data) {
        return <div className="item-error">Network Error....</div>;
    }

    if (data.length === 0) {
        return <div className="item-error">No Flight...</div>;
     return <div className="container">
     <div className="item-error no_flight">
            <div className="text">NO </div> 
            <div className="text"> 
              <span className="spantext"> FLIGHT ....</span>
            </div>
     </div>

     <img class="image_plane" src={plane} alt="Logo" />
     </div>
     ; 
    }


    // Divisez les données en groupes de 4 éléments
    const groups = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groups.push(data.slice(i, i + groupSize));
>>>>>>> f65174d5f621e819403a28472062c6781a54d858
    }

    return (
        <div className="flight-data-container">
            {data.slice(currentIndex, currentIndex + 5).map((flight, index) => (
                <div
                    key={index}
                    className={`flight-data ${index % 2 === 0 ? 'row-stripped' : ''}`}
                >
                    <div className='item-content'> <img className='item-image' src={getLogoUrlByAirline(logos, flight.sigle_airline)} alt='Unkwon Airline' /></div>
                    <div className='item-content'>{flight.flight}</div>
                    <div className='item-content'>{flight.to}</div>
                    <div className='item-content time-color'>{flight.time}</div>
                    <div className='item-content'>{flight.status}</div>
                </div>
            ))}
        </div>
    );
};

export default AutoScroll;
