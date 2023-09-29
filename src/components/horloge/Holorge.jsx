import React, { useState, useEffect } from 'react';

const Horloge = () => {
  const [heure, setHeure] = useState(new Date());

  useEffect(() => {
    const intervalle = setInterval(() => {
      setHeure(new Date());
    }, 1000); // Mettre a jour la date a chaque seconde

    return () => clearInterval(intervalle); // vide l'interval pour tout comportement par defaut
  }, []);

  return (
    //Le formatage du date 2 chiffre par heure, minute et l'heure au formatg de 12hres
    <span>{heure.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</span>
  );
}

export default Horloge;
