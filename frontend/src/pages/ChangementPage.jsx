import React from "react";
import IconChangement from '../assets/img/changement.gif';

const ChangementPage = () => {

  return (
    <div style={container}>
      <div style={itemShowChange}>
        <img src={IconChangement} alt="" />
        <h2 style={headingStyles}>Changement de page en cours...</h2>
      </div>
    </div>
  );
};

const container = {
  backgroundColor: "#2a0e3e",
  textAlign: "center",
  height: '100vh'
};

const itemShowChange = {
  paddingTop: 225,

}

const headingStyles = {
  color: "#a2afd1",
};

export default ChangementPage;
