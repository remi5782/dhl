import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CardList from './CartList';

export default ()=>{
    return (
       
        <Container>
  <Row>
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
</Container>
//         <Container>
//   <Row className="justify-content-md-center">
//     <Col xs lg="6">
//     <h2> Shopping Cart</h2>
//         <CardList/>
//     </Col>
//     </Row>
//     </Container>
       
    
    )
}