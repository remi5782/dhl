import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import { useReducer} from 'react-redux';
import {addExpense, addEarnings} from './action';
export default function AddForm({title}){

    const [state, dispatch] = useReducer(reducer, initialState);
    const [formData, setFormData] = useState({price: '', date: '', description: ''});
    handleChange=(e)=>{
        setFormData(prevState=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    handleSubmit=()=>{
        dispatch((formData)=> addExpense({id: Math.random(),...formData}))
    }
    return (<Form>
        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter Price" name="price" value={formData.price} onChange={handleChange}/>
          <Form.Text className="text-muted">
            Please enter the Price
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Date" name="date" value={formData.date} onChange={handleChange}/>
          <Form.Text className="text-muted">
            Please enter the Date
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Description"  name="description" value={formData.description} onChange={handleChange}/>
          <Form.Text className="text-muted">
            Please enter the Description
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
      </Form>)
}