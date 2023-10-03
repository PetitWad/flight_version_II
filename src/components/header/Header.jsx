import React from 'react';
import './header.css';
import AanLogo from '../../assets/img/logo.png';
import Horloge from '../horloge/Holorge';

const Header = ({ typeVol, logo }) => {

    return (
        <div className='header-grid'>
            <header>
                <div className="logo">
                    <img src={AanLogo} alt="Logo" />
                    <div>
                        <div className='logo-label'>Aéroport International</div>
                        <div className='logo-label'>Toussaint Louverture</div>
                    </div>
                </div>
                <div className="departures">
                    <h1>{typeVol} {logo}  </h1>


                </div>
                <div className="current-time">
                    <h1> <Horloge /></h1>
                </div>
            </header>
            <div className="flight-header">
                <div className='item'>Airline</div>
                <div className='item'>Flight</div>
                <div className='item'>Airline</div>
                <div className='item'>To</div>
                <div className='item'>Time</div>
                <div className='item'>Status</div>
            </div>
        </div>
    );
};

export default Header;
