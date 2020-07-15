import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CartItem from './CartItem';

export default function CartList({ items }) {

    return (
        <ListGroup>
            <CartItem/>
            <CartItem/>
            {/* {items.map(item=> <CartItem item={item} key={item.id}/>)} */}
        </ListGroup>
    )

}