import React, { } from 'react';
// import profilephoto from '../images/Ce.gif';
import { Cont, Container, Photo} from './pagesStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Col, Row} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ivan from '../images/ivan1.jpg'


const About = () => {
  const {t} =useTranslation()
  return (
    
    
     

     <Cont>
    <Container>
    <Row>
      <Col sm={6}><Photo src={ivan}/></Col>
    </Row>
    <Row>
      <Col sm={4}></Col>
      <Col sm={6}>
      <h4>{t('about')}</h4>
      <div>
       <br/>
       <br/>
      </div>
        <p>
        {t('history')}</p>
        <div>
       <br/>
       
      </div>   
        <p>{t('history1')}
        
       </p>
       <div>
       <br/> 
     </div>        
         <p>{t('history2')}</p>
         <div>
       <br/>
      </div>
            <p>{t('history3')}
           </p>
      </Col>  
    </Row>
  </Container>
  </Cont>
  )
  
}

export default About;


