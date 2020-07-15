import React from 'react';
import { Card } from 'react-bootstrap';

export default  function CartItem({ item }) {
    return (
        <Card style={{height: '50px'}}>
            <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
    )
}