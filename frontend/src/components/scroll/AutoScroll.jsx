import React, { useState, useEffect } from 'react';
import { logos } from '../../data/AirlineLogo';
import { getLogoUrlByAirline } from '../../config/config';
import './autoScroll.css';
import './animate.css';
import plane from '../../assets/img/plane.png';
import networkError from '../../assets/img/networkError.png';

const AutoScroll = ({ data, loading, typeVol }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        if (!loading && data && data.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex + 7 < data.length ? prevIndex + 7 : 0
                );
            }, 10000); // the scrolling interval (10000 = 10 seconds)

            return () => {
                clearInterval(interval);
                window.removeEventListener('online', handleOnline);
                window.removeEventListener('offline', handleOffline);
            };
        }
    }, [data, loading]);

    if (!isOnline) {
        return (
            <>
                <div className="container networkError">
                    <div className="item-error no_flight">
                        <div className="text">
                            <span className="spantext"> No Internet...</span>
                        </div>
                    </div>
                    <img className="image_plane" src={networkError} alt="mnetwork Error" />
                </div>
            </>

        )

    }

    if (loading) {
        return <div className="item-error">Data Loading...</div>;
    }

    if (!data || data.length === 0) {
        return (
            <div className="container">
                <div className="item-error no_flight">
                    <div className="text">
                        <span className="spantext">No Flight...</span>
                    </div>
                </div>
                <img className="image_plane" src={plane} alt="Logo" />
            </div>
        );
    }

    return (

        <div className="flight-data-container">
            {Array.isArray(data) && data.slice(currentIndex, currentIndex + 7).map((item, index) => (
                <div
                    key={index}
                    className={`flight-data ${index % 2 === 0 ? 'row-stripped' : ''}`}
                >
                    <div className="item-content">
                        <img
                            className="item-image"
                            src={getLogoUrlByAirline(logos, item.airline_code)}
                            alt="Unknown Airline"
                        />
                    </div>
                    <div className="item-content" style={{ whiteSpace: 'nowrap' }}>{item.flight}</div>
                    <div className="item-content" style={{ whiteSpace: 'nowrap' }}>  {typeVol === 'ARRIVALS' ? item.flight_from : item.flight_to}  </div>
                    <div className="item-content time-color" style={{ whiteSpace: 'nowrap' }}>{item.estimate_arrive_time}</div>
                    <div className="item-content" style={{ whiteSpace: 'nowrap' }}>{item.status}</div>
                </div>

            ))}
        </div>
    );
};

export default AutoScroll;
