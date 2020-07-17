import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import CartItem from './CartItem';


export default function CartList({ cartItems }) {
    return (
        <Container fluid>
            {cartItems.map(item=> <CartItem key={item.key} item={item}/>)}
        </Container>
    )

}