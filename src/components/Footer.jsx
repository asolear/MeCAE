import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';  // Asegúrate de que la ruta sea correcta
import TermsOfUse from './TermsOfUse';        // Asegúrate de que la ruta sea correcta

const Footer = () => {
  const footerYear = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
    setShowTermsOfUse(false);  // Cierra otros modales si están abiertos
  };

  const toggleTermsOfUse = () => {
    setShowTermsOfUse(!showTermsOfUse);
    setShowPrivacyPolicy(false);  // Cierra otros modales si están abiertos
  };

  return (
    <div className="footer" style={footerStyle}>
      <p>Copyright &copy; {footerYear} MeCAE. All rights reserved.</p>
      <div style={linkContainerStyle}>
        <button onClick={toggleTermsOfUse} style={linkStyle}>Términos de Uso</button>
        <button onClick={togglePrivacyPolicy} style={linkStyle}>Política de Privacidad</button>
      </div>

      {/* Modal para los Términos de Uso */}
      {showTermsOfUse && (
        <div style={modalStyle}>
          <h2>Términos de Uso</h2>
          <div style={scrollableContainerStyle}>
            <TermsOfUse />
          </div>
          <button onClick={toggleTermsOfUse} style={closeButtonStyle}>Cerrar</button>
        </div>
      )}

      {/* Modal para la Política de Privacidad */}
      {showPrivacyPolicy && (
        <div style={modalStyle}>
          <h2>Política de Privacidad</h2>
          <div style={scrollableContainerStyle}>
            <PrivacyPolicy />
          </div>
          <button onClick={togglePrivacyPolicy} style={closeButtonStyle}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

// Estilos opcionales
const footerStyle = {
  backgroundColor: '#fff',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

const linkContainerStyle = {
  marginTop: '10px',
};

const linkStyle = {
  color: '#4CAF50',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  marginLeft: '10px',
  textDecoration: 'underline',
  fontSize: 'inherit',
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '20px',  color: '#000', // Color oscuro para el texto

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

const closeButtonStyle = {
  marginTop: '10px',
  backgroundColor: '#f44336',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
};

export default Footer;
