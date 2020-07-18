import React from 'react';
import { Container } from 'react-bootstrap';
import CartItem from './CartItem';


export default function CartList({ cartItems, handleDelete }) {
    return (
        <Container fluid>
            {cartItems.map(item => <CartItem handleDelete={handleDelete} key={item.key} item={item} />)}
        </Container>
    )

}