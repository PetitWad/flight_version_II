import React, { useEffect, useState } from 'react';
import './autoScrol.css';
import { Element, scroller } from 'react-scroll';

const AutoScroll = ({ data, loading }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  useEffect(() => {
    const scrollDown = () => {
      scroller.scrollTo('nextElement', {
        duration: 10000, // Augmentez la durée pour un défilement plus lent (par exemple, 4 secondes)
        smooth: 'easeInOutQuart',
      });
    };

    const scrollUp = () => {
      scroller.scrollTo('prevElement', {
        duration: 10000, // Augmentez la durée pour un défilement plus lent (par exemple, 4 secondes)
        smooth: 'linear',
      });
    };

    const scrollInterval = setInterval(() => {
      if (isScrollingDown) {
        scrollDown();
      } else {
        scrollUp();
      }

      setIsScrollingDown((prevIsScrollingDown) => !prevIsScrollingDown);
    }, 10000);

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
      return <div className="item-error">No Flight...</div>;
    }

    return (
      <div>
        <Element name="prevElement" />
        <div className="flight-data-container">
          {data.map((data, index) => (
            <div
              key={index}
              className={`flight-data ${index % 2 === 0 ? 'row-stripped' : ''}`}
            >
              <div className='item-content'> <img className='item-image' src={data.airlineImage} /></div>
              <div className='item-content'>{data.flight}</div>
              <div className='item-content'>{data.airline}</div>
              <div className='item-content'>{data.to}</div>
              <div className='item-content'>{data.time}</div>
              <div className='item-content'>{data.status}</div>
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