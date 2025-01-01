import React, {useState} from "react";
import '../App.css';
import {useDispatch} from "react-redux"
import { setName } from "./lotSlice";
import '../components/SelectionButton'
import SelectionButton from "../components/SelectionButton";
import {Button} from "react-bootstrap" 
import {Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Lots(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    const maxLength = 80;
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setName(value));
        navigate('/lot_preview');
        console.log("value is: " + value);
    }

    return (
        <div className="header">

            <SelectionButton
                to="/"
                variant={"primary"}
                title="Back to home"   
                size="sm"
             
             />

             <h1 className="intro--header">Create a new Lot</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                    <br></br>
                    <Form.Label>Name your lot:</Form.Label>
                    <br/>
                    <Form.Label>Keep in mind ebay listings have an 80 character limit</Form.Label>
                    <Form.Control 
                    type="text" 
                    as="textarea" 
                    placeholder="Name of the lot" 
                    onChange={handleChange}
                    value={value}
                    rows={3}/>
                    <Form.Label className="text-white">
                        {maxLength - value.length} characters left
                    </Form.Label>
                    <br></br>
                    </Form.Group>
                    <Form.Group controlId="formFileDisabled" className="mb-3">
                </Form.Group>

                <Button
     
                type="submit"
                >
                    Submit 

                </Button>

            </Form>
            
        </div>
    )
}
export default Lots;
