import React, { useState, useEffect } from 'react';
import PrivacyPolicy from './PrivacyPolicy'; // Asegúrate de que la ruta sea correcta
import TermsOfUse from './TermsOfUse'; // Asegúrate de que la ruta sea correcta

const CookieConsent = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      setHasConsented(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    setHasConsented(true);
  };

  const declineCookies = () => {
    // Opcional: Podrías manejar la opción de rechazo aquí
    alert('Debes aceptar las cookies para usar el sitio.');
  };

  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
    setShowTerms(false);
  };

  const toggleTerms = () => {
    setShowTerms(!showTerms);
    setShowPolicy(false);
  };

  return (
    <div>
      {!hasConsented ? (
        <>
          {showBanner && (
            <div style={bannerStyle}>
              <p>
                Este sitio utiliza cookies para mejorar tu experiencia. Al continuar navegando, aceptas el uso de cookies.
                Consulta nuestra <button onClick={togglePolicy} style={linkStyle}>Política de Privacidad</button> y los <button onClick={toggleTerms} style={linkStyle}>Términos de Uso</button>.
              </p>
              <div style={buttonContainerStyle}>
                <button onClick={acceptCookies} style={buttonStyle}>Aceptar</button>
                <button onClick={declineCookies} style={buttonStyle}>Rechazar</button>
              </div>
            </div>
          )}

          {showPolicy && (
            <div style={modalStyle}>
              <h2>Política de Privacidad</h2>
              <div style={scrollableContainerStyle}>
                <PrivacyPolicy />
              </div>
              <button onClick={togglePolicy} style={closeButtonStyle}>Cerrar</button>
            </div>
          )}

          {showTerms && (
            <div style={modalStyle}>
              <h2>Términos de Uso</h2>
              <div style={scrollableContainerStyle}>
                <TermsOfUse />
              </div>
              <button onClick={toggleTerms} style={closeButtonStyle}>Cerrar</button>
            </div>
          )}

          {/* Capa de fondo para el modal */}
          {(showPolicy || showTerms) && <div style={overlayStyle}></div>}
        </>
      ) : (
        <div>
          {children} {/* Aquí se renderiza el contenido del sitio si el usuario ha aceptado */}
        </div>
      )}
    </div>
  );
};

// Estilos
const bannerStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo negro con 70% de opacidad
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  zIndex: 1000,
  display: 'flex',            // Usar flexbox para centrar contenido
  alignItems: 'center',       // Centrar verticalmente
  justifyContent: 'center',    // Centrar horizontalmente
  flexDirection: 'column',    // Alinear en columna
};


const linkStyle = {
  color: '#4CAF50',
  textDecoration: 'underline',
  marginLeft: '5px',
};

const buttonContainerStyle = {
  marginTop: '10px',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  margin: '0 10px',
  border: 'none',
  cursor: 'pointer',
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '20px',
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

// Estilo para la capa de fondo del modal
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo opaco
  zIndex: 1000,
};

// Exportar el componente
export default CookieConsent;
