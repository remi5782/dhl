import React from 'react';
import { ListGroup, Container, Button, Col, Row } from 'react-bootstrap';
import CartItem from './CartItem';

export default function CartList({ items }) {

    return (
        <Container fluid>
            <CartItem/>
            <CartItem/>
            {/* {items.map(item=> <CartItem item={item} key={item.id}/>)} */}
            <Row>
                <Col sm="6" lg="6" xs="6">
                <Button variant="primary">Add Income</Button>
                </Col>
                <Col sm="6" lg="6" xs="6">
                <Button variant="primary">Add Spending</Button>
                </Col>
            </Row>
        </Container>
    )

}