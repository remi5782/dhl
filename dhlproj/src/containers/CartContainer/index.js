import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import _ from 'lodash';
import { findTotal } from '../../utils/operations';
import CardList from './CartList';
import AddModal from './AddModal';
import { useStore } from '../../store/useStore';
// import {addItem, deleteItem} from './action';

function CartContainer() {
    const [modalTitle, setModalTitle] = useState("");
    const { state, dispatch } = useStore();
    const [cartItems, setCartItems] = useState(state.cartItems);
    console.log(cartItems, 'appState')
    const [modalOpen, setModalOpen] = useState(false);
    // const [state, dispatch] = useReducer(CartReducer, {cartItems:[]});

    const handleAdd = useCallback((item) => {
        localStorage.setItem("cartItems", JSON.stringify([...JSON.parse(localStorage.getItem("cartItems")), item]));
        return dispatch({ type: "ADD_ITEM", payload: item })
    }, [dispatch]
    );
    // const handleAdd = (item) => {
    //             console.log(item, 'item', cartItems);
    //     setCartItems([...cartItems, item]);
    //     };
    const handleDelete = useCallback((item) => {
        let cartLocal = JSON.parse(localStorage.getItem("cartItems"));
        localStorage.setItem("cartItems", JSON.stringify(cartLocal.filter(e => e.id !== item.id)))
        return dispatch({ type: "DELETE_ITEM", payload: item })
    }, [dispatch]);
    useEffect(() => {

        //removing duplicates in case for future for  the Update Action
        if (!_.isEqual(cartItems, state.cartItems)) {
            setCartItems([...state.cartItems])
        }

    }, [state.cartItems]);

    function handleClick(e) {
        const { name } = e.target;
        setModalTitle(name);
        setModalOpen(true);
    }
    return (
        <>
            <h2 style={{ padding: '2rem', background: "#ff9950" }}> Shopping Cart</h2>
            {cartItems && <h4 style={{ margin: '2rem' }}> Total in Cart is <span style={{ fontSize: '2rem', fontColor: 'orange' }}>{findTotal(cartItems)}</span></h4>}
            {!cartItems && <h4>Loading...</h4>}
            {cartItems && cartItems.length !== 0 && <CardList handleDelete={handleDelete} modalOpen={modalOpen} modalTitle={modalTitle} cartItems={cartItems} />}
            {modalOpen && <AddModal handleAdd={handleAdd} title={modalTitle} open={modalOpen} setOpen={setModalOpen} />}
            <Row>
                <Col sm="6" lg="6" xs="6">
                    <Button onClick={handleClick} name="earning" variant="primary">Add Income</Button>
                </Col>
                <Col sm="6" lg="6" xs="6">
                    <Button onClick={handleClick} name="expense" variant="primary">Add Spending</Button>
                </Col>
            </Row>
        </>

    )
}

export default CartContainer;