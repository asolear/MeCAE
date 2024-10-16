import React from 'react';

const TermsOfUse = () => {
  return (
    <div style={containerStyle}>
      <h1>Términos de Uso</h1>
      <p><strong>Última actualización: [Fecha]</strong></p>

      <h2>1. Aceptación de los Términos</h2>
      <p>
        Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos Términos de Uso y a nuestra Política de Privacidad. Si no está de acuerdo con estos términos, le solicitamos que no utilice el sitio.
      </p>

      <h2>2. Modificaciones a los Términos</h2>
      <p>
        MeCAE se reserva el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios entrarán en vigor una vez que se publiquen en este sitio. Es su responsabilidad revisar periódicamente los términos para estar al tanto de cualquier modificación.
      </p>

      <h2>3. Uso Permitido</h2>
      <p>
        Usted se compromete a utilizar este sitio solo con fines legales y de manera que no infrinja los derechos de otros. No podrá utilizar este sitio de ninguna manera que pueda dañar, deshabilitar, sobrecargar o perjudicar el mismo, ni utilizarlo para realizar actividades fraudulentas, engañosas o malintencionadas.
      </p>

      <h2>4. Veracidad de la Información Proporcionada</h2>
      <p>
        Los usuarios del sitio se comprometen a proporcionar información veraz, precisa y completa en cualquier formulario, registro o interacción con el sitio. Cualquier información falsa, incompleta o engañosa proporcionada por el usuario podrá resultar en la suspensión o cancelación de su acceso al sitio sin previo aviso.
      </p>
      <p>
        Nos reservamos el derecho de verificar la veracidad de la información proporcionada en cualquier momento y de tomar las acciones legales correspondientes en caso de incumplimiento.
      </p>

      <h2>5. Propiedad Intelectual</h2>
      <p>
        Todos los contenidos de este sitio, incluidos textos, gráficos, logotipos, imágenes y software, son propiedad de MeCAE o de sus licenciantes y están protegidos por las leyes de derechos de autor y propiedad intelectual. No se permite la reproducción, distribución o modificación de ningún contenido sin el consentimiento previo por escrito de MeCAE.
      </p>

      <h2>6. Limitación de Responsabilidad</h2>
      <p>
        En la máxima medida permitida por la ley, MeCAE no será responsable de ningún daño directo, indirecto, incidental, especial, punitivo o consecuente que surja de su acceso o uso del sitio, incluyendo, pero no limitado a, la pérdida de beneficios o ingresos, o la interrupción del negocio.
      </p>

      <h2>7. Enlaces a Sitios de Terceros</h2>
      <p>
        Este sitio puede contener enlaces a otros sitios web que no son propiedad ni están controlados por MeCAE. No somos responsables del contenido de dichos sitios y no asumimos ninguna responsabilidad por las prácticas de privacidad de los mismos. Le recomendamos que revise los términos y políticas de privacidad de cualquier sitio web de terceros que visite.
      </p>

      <h2>8. Sanciones por Incumplimiento</h2>
      <p>
        En caso de que se descubra que ha proporcionado información falsa, inexacta o engañosa, MeCAE se reserva el derecho de suspender o eliminar su cuenta sin previo aviso. Dependiendo de la gravedad del caso, MeCAE se reserva el derecho de tomar medidas legales adicionales para proteger sus derechos y los de otros usuarios.
      </p>

      <h2>9. Ley Aplicable</h2>
      <p>
        Estos Términos de Uso se rigen por las leyes de España. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Málaga.
      </p>

      <h2>10. Contacto</h2>
      <p>
        Si tiene preguntas sobre estos Términos de Uso, contáctenos en:
      </p>
      <ul>
        <li><strong>Correo electrónico</strong>: info@ibercae.com</li>
        <li><strong>Dirección</strong>: C. de Marie Curie, 35, PTA, Campanillas, 29590 Málaga</li>
      </ul>
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

export default TermsOfUse;
