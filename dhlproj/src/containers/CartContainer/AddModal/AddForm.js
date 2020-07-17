import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import {addItem} from '../action';
export default function AddForm({title}){
  const dispatch = useDispatch();
    const [formData, setFormData] = useState({price: '', date: '', description: ''});
    function handleChange(e){
      const {name, value} = e.target;
        setFormData((prevState)=>({
            ...prevState,
            [name] : value
        }))
    }
    const handleSubmit = ()=>{
      
        dispatch(addItem({id: Math.round(Math.random()*345),type: "earning",...formData}))
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
        <Button variant="primary"  onClick={handleSubmit}>
    Submit
  </Button>
      </Form>)
}