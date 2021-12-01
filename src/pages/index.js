import React, { } from 'react';
// import profilephoto from '../images/Ce.gif';
import { Cont, Container, Photo} from './pagesStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Col, Row} from 'react-bootstrap';
import ivan from '../images/ivan.jpg'


const Home = () => {
  return (
    
    
     

     <Cont>
    <Container>
    <Row>
      <Col sm={6}><Photo src={ivan}/></Col>
    </Row>
    <Row>
      <Col sm={4}></Col>
      <Col sm={6}>
      <h4>About Me</h4>
      <div>
       <br/>
       <br/>
      </div>
        
        
      </Col>  
    </Row>
  </Container>
  </Cont>
  )
  
}

export default Home;


