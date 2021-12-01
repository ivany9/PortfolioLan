import React from 'react';
import {FooterLink,Container,Email} from './FooterStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
   
    return (
        
        
         <Container>
         
       
       <FooterLink href="https://github.com/ivany9" ><FontAwesomeIcon icon={faGithub}/></FooterLink>
       <FooterLink href="https://www.linkedin.com/in/jorge-ivan-2022b4113" ><FontAwesomeIcon icon={faLinkedin}/></FooterLink>
      </Container>
    );
  };
  export default Footer;





