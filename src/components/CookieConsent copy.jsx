import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, Box, Button, Typography } from '@mui/material';
import PrivacyPolicy from './PrivacyPolicy'; // Asegúrate de que la ruta sea correcta
import TermsOfUse from './TermsOfUse'; // Asegúrate de que la ruta sea correcta

const CookieConsent = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setOpenModal(true); // Abrir el modal si no hay consentimiento
    } else {
      setHasConsented(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setOpenModal(false); // Cerrar el modal al aceptar
    setHasConsented(true);
  };

  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
    setShowTerms(false); // Cerrar los términos si están abiertos
  };

  const toggleTerms = () => {
    setShowTerms(!showTerms);
    setShowPolicy(false); // Cerrar la política si está abierta
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpenModal(false); // Evitar que se cierre al hacer clic fuera del modal
    }
  };

  return (
    <div>
      {!hasConsented ? (
        <>
          <Dialog open={openModal} onClose={handleClose}>
            <DialogTitle>Aviso de Cookies</DialogTitle>
            <DialogContent>
              <Typography>
                Este sitio utiliza cookies para mejorar tu experiencia. Al continuar navegando, aceptas el uso de cookies.
                Consulta nuestra{' '}
                <Button onClick={togglePolicy} sx={linkStyle}>Política de Privacidad</Button> y los{' '}
                <Button onClick={toggleTerms} sx={linkStyle}>Términos de Uso</Button>.
              </Typography>
              <Box sx={buttonContainerStyle}>
                <Button onClick={acceptCookies} variant="contained" sx={buttonStyle}>
                  Aceptar
                </Button>
              </Box>
            </DialogContent>
          </Dialog>

          {/* Modal para Política de Privacidad */}
          <Dialog open={showPolicy} onClose={togglePolicy}>
            <DialogTitle>Política de Privacidad</DialogTitle>
            <DialogContent>
              <PrivacyPolicy />
              <Button onClick={togglePolicy} sx={closeButtonStyle}>Cerrar</Button>
            </DialogContent>
          </Dialog>

          {/* Modal para Términos de Uso */}
          <Dialog open={showTerms} onClose={toggleTerms}>
            <DialogTitle>Términos de Uso</DialogTitle>
            <DialogContent>
              <TermsOfUse />
              <Button onClick={toggleTerms} sx={closeButtonStyle}>Cerrar</Button>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <div>{children}</div> // Contenido del sitio una vez que se acepta el consentimiento
      )}
    </div>
  );
};

// Estilos
const linkStyle = {
  color: '#4CAF50',
  textDecoration: 'underline',
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
};

const closeButtonStyle = {
  marginTop: '10px',
  backgroundColor: '#f44336',
  color: 'white',
  padding: '10px 20px',
};

export default CookieConsent;
