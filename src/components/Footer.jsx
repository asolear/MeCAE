import React, { useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import PrivacyPolicy from './PrivacyPolicy';  // Ensure the path is correct
import TermsOfUse from './TermsOfUse';        // Ensure the path is correct
import AboutUs from './AboutUs';              // Ensure the path is correct

const Footer = () => {
  const footerYear = new Date().getFullYear();
  const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false);
  const [openTermsOfUse, setOpenTermsOfUse] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);

  const togglePrivacyPolicy = () => {
    setOpenPrivacyPolicy(!openPrivacyPolicy);
    setOpenTermsOfUse(false);  // Close other modals if open
    setOpenAboutUs(false);
  };

  const toggleTermsOfUse = () => {
    setOpenTermsOfUse(!openTermsOfUse);
    setOpenPrivacyPolicy(false);  // Close other modals if open
    setOpenAboutUs(false);
  };

  const toggleAboutUs = () => {
    setOpenAboutUs(!openAboutUs);
    setOpenPrivacyPolicy(false);  // Close other modals if open
    setOpenTermsOfUse(false);
  };

  return (
    <Box component="footer" sx={{ p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Button onClick={toggleAboutUs} sx={{ color: 'inherit' }}>Sobre MeCAE</Button>
      <Button onClick={toggleTermsOfUse} sx={{ color: 'inherit' }}>Términos de Uso</Button>
      <Button onClick={togglePrivacyPolicy} sx={{ color: 'inherit' }}>Política de Privacidad</Button>
      <p>&copy; {footerYear} MeCAE. Mercado primario de ahorros energéticos</p>

      {/* Dialog for Terms of Use */}
      <Dialog open={openTermsOfUse} onClose={toggleTermsOfUse}>
        <DialogTitle>Términos de Uso</DialogTitle>
        <DialogContent>
          <TermsOfUse />
        </DialogContent>
        <Button onClick={toggleTermsOfUse}>Cerrar</Button>
      </Dialog>

      {/* Dialog for Privacy Policy */}
      <Dialog open={openPrivacyPolicy} onClose={togglePrivacyPolicy}>
        <DialogTitle>Política de Privacidad</DialogTitle>
        <DialogContent>
          <PrivacyPolicy />
        </DialogContent>
        <Button onClick={togglePrivacyPolicy}>Cerrar</Button>
      </Dialog>

      {/* Dialog for About Us */}
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
