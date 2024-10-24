import React, { useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import PrivacyPolicy from './PrivacyPolicy';  // Asegúrate de que la ruta sea correcta
import TermsOfUse from './TermsOfUse';        // Asegúrate de que la ruta sea correcta
import AboutUs from './AboutUs';              // Asegúrate de que la ruta sea correcta
import CookieConsent from './CookieConsent';  // Asegúrate de que la ruta sea correcta

const Footer = () => {
  const footerYear = new Date().getFullYear();
  const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false);
  const [openTermsOfUse, setOpenTermsOfUse] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const [openCookieConsent, setOpenCookieConsent] = useState(false); // Nuevo estado para cookies

  const togglePrivacyPolicy = () => {
    setOpenPrivacyPolicy(!openPrivacyPolicy);
    setOpenTermsOfUse(false);
    setOpenAboutUs(false);
    setOpenCookieConsent(false);
  };

  const toggleTermsOfUse = () => {
    setOpenTermsOfUse(!openTermsOfUse);
    setOpenPrivacyPolicy(false);
    setOpenAboutUs(false);
    setOpenCookieConsent(false);
  };

  const toggleAboutUs = () => {
    setOpenAboutUs(!openAboutUs);
    setOpenPrivacyPolicy(false);
    setOpenTermsOfUse(false);
    setOpenCookieConsent(false);
  };



  return (
    <Box component="footer" sx={{ p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Button onClick={toggleAboutUs} sx={{ color: 'inherit' }}>Sobre MeCAE</Button>
      <Button onClick={toggleTermsOfUse} sx={{ color: 'inherit' }}>Términos de Uso</Button>
      <Button onClick={togglePrivacyPolicy} sx={{ color: 'inherit' }}>Política de Privacidad</Button>
      <p>&copy; {footerYear} MeCAE. Mercado primario de ahorros energéticos</p>

      {/* Dialog para los Términos de Uso */}
      <Dialog open={openTermsOfUse} onClose={toggleTermsOfUse}>
        <DialogTitle>Términos de Uso</DialogTitle>
        <DialogContent>
          <TermsOfUse />
        </DialogContent>
        <Button onClick={toggleTermsOfUse}>Cerrar</Button>
      </Dialog>

      {/* Dialog para la Política de Privacidad */}
      <Dialog open={openPrivacyPolicy} onClose={togglePrivacyPolicy}>
        <DialogTitle>Política de Privacidad</DialogTitle>
        <DialogContent>
          <PrivacyPolicy />
        </DialogContent>
        <Button onClick={togglePrivacyPolicy}>Cerrar</Button>
      </Dialog>

      {/* Dialog para Sobre Nosotros */}
      <Dialog open={openAboutUs} onClose={toggleAboutUs}>
        <DialogTitle>Sobre MeCAE</DialogTitle>
        <DialogContent>
          <AboutUs />
        </DialogContent>
        <Button onClick={toggleAboutUs}>Cerrar</Button>
      </Dialog>


    </Box>
  );
};

export default Footer;
