import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterComponent = () => (
  <footer className="text-center">
    © 2024 Jason Lei<br/>
    Send me an email<br/>
    <FontAwesomeIcon icon={['fas', 'twitter']} /> 
    <FontAwesomeIcon icon={['fas', 'linkedin']} /> 
    <FontAwesomeIcon icon={['fas', 'instagram']} />
  </footer>
);

export default FooterComponent;
