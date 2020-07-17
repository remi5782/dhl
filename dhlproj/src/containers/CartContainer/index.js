import React, {useState} from 'react';
import {useSelector, shallowEqual, connect} from 'react-redux';
import {Button, Col, Row} from 'react-bootstrap';
import {findTotal} from '../../utils/operations';
import CardList from './CartList';
import AddModal from './AddModal';

function CartContainer({cartItems}){
    const [modalTitle, setModalTitle] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    // const cartItems = useSelector(state=> {
    //     //console.log(state); 
    //     return state.cartItems 
    // }, shallowEqual);
    //console.log(cartItems);
    function handleClick(e){
        const {name} = e.target;
        setModalTitle(name);
        setModalOpen(true);
    }
    return (
        <>
            <h2> Shopping Cart</h2>
            { cartItems && <h4> Total in Cart is {findTotal(cartItems)}</h4>} 
            {!cartItems && <h4>Loading...</h4>}
            {cartItems && cartItems.length !==0 && <CardList modalOpen={modalOpen} modalTitle={modalTitle} cartItems={cartItems}/>}
            {modalOpen && <AddModal title={modalTitle} open={modalOpen} setOpen={setModalOpen}  />}
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

export default connect((state)=> ({cartItems: state.cartItems}))(CartContainer);