import React from 'react';

const AboutUs = () => {
  return (
    <div style={containerStyle}>
      <div>
      <section>
        <h1>Sobre Nosotros</h1>
        <p>Somos una empresa dedicada a ofrecer los mejores servicios en el Sistema de Certificados de Ahorro Energético (CAE). 
          Nuestra misión es participar en el mercado primario facilitando el contacto entre 'Propietarios del ahorro' y 'Sujetos obligados y delegados'.</p>
      </section>
      <section>
        <h2>Contáctanos</h2>
        <p><strong>Dirección:</strong> C. de Marie Curie, 35, PTA, Campanillas, 29590 Málaga</p>
        <p><strong>Teléfono:</strong> +34 951 73 34 91</p>
        <p><strong>Email:</strong> info@ibercae.com</p>
      </section>

      {/* <section>
        <h2>Nuestra Historia</h2>
        <p>Fundada en [año], hemos crecido hasta convertirnos en líderes en [enfoque o mercado específico], ofreciendo soluciones innovadoras a nuestros clientes.</p>
      </section>

      <section>
        <h2>Conoce al Equipo</h2>
        <ul>
          <li>John Doe - CEO</li>
          <li>Jane Smith - CTO</li>
          <li>Emily Davis - COO</li>
        </ul>
      </section>

      <section>
        <h2>Nuestros Valores</h2>
        <p>Creamos en la transparencia, la innovación y en poner a nuestros clientes en primer lugar en todo lo que hacemos.</p>
      </section>

      <section>
        <h2>Contáctanos</h2>
        <p>Si tienes alguna pregunta, no dudes en contactarnos en info@tuempresa.com o visítanos en [tu dirección].</p>
      </section> */}
    </div>
    </div>
  );
};

// Estilos para el contenedor
const containerStyle = {
  padding: '20px',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.6',
  backgroundColor: '#f9f9f9',
  borderRadius: '5px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

export default AboutUs;
