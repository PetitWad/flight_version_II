import React from "react";
import './styles.css';
import IconChangement from '../assets/img/changement.gif';

const ChangementPage = () => {

  return (
    <div className="container" >
      <div className="itemShowChange" >
        <img src={IconChangement} alt="" />
        <h2 className="headingStyles">Changement de page en cours...</h2>
      </div>
    </div>
  );
};

export default ChangementPage;
