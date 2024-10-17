import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';  // Asegúrate de que la ruta sea correcta
import TermsOfUse from './TermsOfUse';        // Asegúrate de que la ruta sea correcta
import AboutUs from './AboutUs';        // Asegúrate de que la ruta sea correcta

const Footer = () => {
  const footerYear = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
    setShowTermsOfUse(false);  // Cierra otros modales si están abiertos
    setShowAboutUs(false);
  };

  const toggleTermsOfUse = () => {
    setShowTermsOfUse(!showTermsOfUse);
    setShowPrivacyPolicy(false);  // Cierra otros modales si están abiertos
    setShowAboutUs(false);
  };

  const toggleAboutUs = () => {
    setShowAboutUs(!showAboutUs);
    setShowPrivacyPolicy(false);  // Cierra otros modales si están abiertos
    setShowTermsOfUse(false);
  };

  return (
    <div className="footer">


      <button onClick={toggleAboutUs} className='navbarListItem'>MeCAE&copy; {footerYear}</button>
      <button onClick={toggleAboutUs} className='navbarListItem'>Sobre MeCAE</button>
      <button onClick={toggleTermsOfUse} className='navbarListItem'>Términos de Uso</button>
      <button onClick={togglePrivacyPolicy} className='navbarListItem'>Política de Privacidad</button>

      {showTermsOfUse && (
        <div style={modalStyle}>
          <div style={scrollableContainerStyle}>
            <TermsOfUse />
          </div>
          <button className='formButtonActive' onClick={toggleTermsOfUse}>Cerrar</button>

        </div>
      )}

      {/* Modal para la Política de Privacidad */}
      {showPrivacyPolicy && (
        <div style={modalStyle}>
          <div style={scrollableContainerStyle}>
            <PrivacyPolicy />
          </div>
          <button className='formButtonActive' onClick={togglePrivacyPolicy}>Cerrar</button>
        </div>
      )}

      {/* Modal para la AboutUs */}
      {showAboutUs && (
        <div style={modalStyle}>
          <div style={scrollableContainerStyle}>
            <AboutUs />
          </div>
          <button onClick={toggleAboutUs} className='formButtonActive'>Cerrar</button>
        </div>
      )}
    </div>
  );
};



const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '20px', color: '#000', // Color oscuro para el texto

  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  zIndex: 1001,
  maxHeight: '80vh',
  overflowY: 'auto',
  width: '90%',
};

const scrollableContainerStyle = {
  maxHeight: '60vh',
  overflowY: 'auto',
  marginBottom: '10px',
};


export default Footer;
