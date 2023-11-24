import React from 'react';
import './footer.css'; // Assurez-vous d'avoir un fichier CSS correspondant
import Date from './DateComponent';

const Footer = () => {
  return (
    <footer className="footer-grid">
      <div className='dateFooter'>
        <Date />
      </div>
      <div>
        <span>&copy; Powered By ATALOU MICROSYSTEM</span>
      </div>
    </footer>

  );
};

export default Footer;
