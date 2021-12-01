import React  from 'react';
import { Cont, Container} from './pagesStyles';
import  {Col, Row, Button} from 'react-bootstrap';
import resume from '../images/resume2.pdf'
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const {t}=useTranslation()
  return (
   



    <Cont>
    <Container>
    <Row>
      <Col sm={6}>
        <h3>{t('education')}</h3>


      </Col>
      <Col sm={6}>
   
       <h4>{t('us')}</h4>
       <p>{t('usp')}</p>
       <div>
      <br/>
      
      </div>
   
       <h4>{t('ue')}</h4>
       <p>{t('uep')}</p>
       <div>
      <br/>
      </div>

       <h4>{t('up')}</h4>
       <p>{t('upp')}</p>
       <div>
      <br/>
      </div>
      <div>
      <hr/>
      </div>
     </Col>
    </Row>
    
    <Row>
      <Col sm={6}><h4>{t('work')}</h4>  
      </Col>
      <Col sm={6}>
      <h4>BKH Group</h4>
       <p>{t('bkp')}</p>
       <div>
      <br/>
      </div> 
       <h4>Pinetown Precision Engineering </h4>
       <p>{t('ppp')}</p>
       <div>
      <br/>
      </div>  
       <h4>Partescol SAS</h4>
       <p>{t('ptp')}</p>
       <div>
      <br/>
      </div>
       <h4>Force Factory</h4>
       <p>{t('ffp')}</p>
       <div>
      <br/>
      <br/>
      <br/>
      </div>  
      
      
      
      
      </Col>
    </Row>
    
     <Row>
      <Col sm={1}>  
       <a>< Button variant="dark" size="lg" href={resume} download="resume2.pdf">{t('resumen')}</Button></a>
      </Col>
     </Row>
  </Container>
  </Cont>
















  );}
  
  

export default Resume;
