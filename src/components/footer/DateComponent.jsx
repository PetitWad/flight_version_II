import React, { useState, useEffect } from 'react';

const DateComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000); // Mettre à jour la date chaque seconde

    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  }, []);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);

  return (
    <div>
      <h3>{formattedDate}</h3>
    </div>
  );
};

export default DateComponent;
