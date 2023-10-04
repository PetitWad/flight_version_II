import React, { useEffect, useState } from 'react';
import './autoScrol.css';
import './animate.css';
import plane from '../../assets/img/plane.png';
import { Element, scroller } from 'react-scroll';

const AutoScroll = ({ data, loading }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const groupSize = 4; // Nombre d'éléments par groupe
  const scrollDuration = 40000; // Durée de défilement par groupe en millisecondes
  const pauseDuration = 6000; // Durée de la pause entre les groupes en millisecondes

  useEffect(() => {
    const scrollGroup = () => {
      if (isScrollingDown) {
        scroller.scrollTo('nextElement', {
          duration: scrollDuration,
          smooth: 'easeInOutQuart',
        });
      } else {
        scroller.scrollTo('prevElement', {
          duration: scrollDuration,
          smooth: 'outEaseInQuart',
        });
      }
    };

    const scrollInterval = setInterval(() => {
      scrollGroup();
      setIsScrollingDown((prevIsScrollingDown) => !prevIsScrollingDown);
    }, scrollDuration + pauseDuration);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [isScrollingDown]);

  const renderContent = () => {
    if (loading) {
      return <div className="item-error">Data Loading....</div>;
    }

    if (!data) {
      return <div className="item-error">Network Error....</div>;
    }

    if (data.length === 0) {
     return <div className="container">
     <div className="item-error no_flight">No Flight...</div>
     <img class="image_plane" src={plane} alt="Logo" />
     </div>
     ; 
    }


    // Divisez les données en groupes de 4 éléments
    const groups = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groups.push(data.slice(i, i + groupSize));
    }

    return (
      <div>
        <Element name="prevElement" />
        <div className="flight-data-container">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="group-container">
              {group.map((flightData, index) => (
                <div
                  key={index}
                  className={`flight-data ${
                    index % 2 === 0 ? 'row-stripped' : ''
                  }`}
                >
                  <div className="item-content">
                    <img className="item-image" src={flightData.airlineImage} />
                  </div>
                  <div className="item-content">{flightData.flight}</div>
                  <div className="item-content">{flightData.airline}</div>
                  <div className="item-content">{flightData.to}</div>
                  <div className="item-content">{flightData.time}</div>
                  <div className="item-content">{flightData.status}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <Element name="nextElement" />
      </div>
    );
  };

  return renderContent();
};

export default AutoScroll;
