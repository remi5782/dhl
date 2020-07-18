import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

export default function CartItem({ item, handleDelete }) {
    return (
        <Row style={{ border: '1px solid bottom', padding: '1rem', marginBottom: '2rem', justifyContent: 'space-around', background: '#fff9f0' }}>
            <Col lg="4" md="4" sm="4" xm="4" xs="4" style={{ textAlign: 'left', display: 'grid' }}>
                <span style={{ fontSize: '0.5rem' }}> {item.date}</span>
                <span style={{ fontSize: '1.5rem', color: item.type === 'expense' ? 'red' : "green" }} >{item.price} Cr</span>
            </Col>
            <Col lg="4" md="4" sm="4" xm="4" xs="4" style={{ textAlign: 'left', marginTop: '0.5rem' }}>
                <span >{item.description}</span>
            </Col>
            <Col lg="2" md="2" sm="2" xm="2" xs="2" style={{ textAlign: 'left', marginTop: '0.5rem' }}>
                <Button onClick={() => handleDelete(item)}><AiFillDelete /></Button>
            </Col>
        </Row>
    )
}