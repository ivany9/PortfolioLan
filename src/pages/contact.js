import {Form,Cont,Back, ContactLink} from './pagesStyles';
import React, { useState } from 'react';
import {validateEmail,validata } from '../utils/helpers'
import  { Button,Container,Row,Col} from 'react-bootstrap';
import { NavLink } from '../components/Navbar/NavbarElements';
import {FooterLink} from '../components/Footer/FooterStyles';
import { FontAwesomeIcon,envelope } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { contains, style } from 'dom-helpers';
import fondo from '../images/cont.jpg'
import "./stylesimg.css"; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

   const [email,setEmail]=useState('');
   const [userName, setUserName]=useState('');
   const [texta,setText]=useState('');
   const [errorMessagename,setErrorMessagename]=useState('');
   const [errorMessageemail,setErrorMessageemail]=useState('');
   const [errorMessagedescription,setErrorMessagedescription]=useState('');

   const handleInputChange=(e) =>{
   
   const{target}=e;
   const inputType=target.name;
   const inputValue=target.value;
   
   

   if(inputType==='userName'){
    setUserName(inputValue);
   } else if (inputType==='email') {
    setEmail(inputValue);
    
   }else {
         
        setText(inputValue);
   }

  }

   const handleFormSubmit = (e) =>{

    e.preventDefault();
   
       if(!validata(userName)){
        //alert(userName);
         setErrorMessagename('Include name');
         return
         }
    
     else if(!validateEmail(email)){
          
        
         setErrorMessageemail('Invalid email');
         return;
         }
         else  if (!validata(texta)) {
          setErrorMessagedescription('Description empty');   
          return;  
         }

         setUserName('');
         setEmail('');
         setText('');
         setErrorMessageemail('');
         setErrorMessagename('');
         setErrorMessagedescription('');

       }

    
    
  
    

  return (
    
      <Cont>
    
      
      
        
    <Form>
    <div className="form-group p-1">
     
        <label htmlFor="name">Name</label>
        <input value={userName} onChange={handleInputChange} name="userName"  className="form-control" placeholder="name"/><p> {errorMessagename}</p>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input  value={email} onChange={handleInputChange}  name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="name@example.com" />
        <p> {errorMessageemail}</p>
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea value={texta} onChange={handleInputChange} className="form-control" name="texta" rows="10"></textarea>  <p> {errorMessagedescription}</p>
    </div>
    <div>
      <br/>
      </div>
      < Button variant="dark" size="lg" onClick={handleFormSubmit}>Submit</Button>{"           "}
      <div className="form-group d-flex justify-content-end text-secondary" >
      
      </div>
     </Form>
     
      
      
      <Back>
      
      
       <ContactLink  href="https://github.com/ivany9" ><FontAwesomeIcon icon={faGithub}/> <p>Github</p></ContactLink >
       <ContactLink href="https://www.linkedin.com/in/jorge-ivan-2022b4113" ><FontAwesomeIcon icon={faLinkedin}/><p>Linkedin</p></ContactLink >
       <ContactLink href="mailto:ivany9@gmail.com" ><FontAwesomeIcon icon={faEnvelope}/><p>email</p></ContactLink >
      

       </Back>
        
     


  

     

   

</Cont>

  );
};

export default Contact;
