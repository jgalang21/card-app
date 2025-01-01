import React, {useState} from "react";
import '../App.css';
import {useDispatch} from "react-redux"
import { setName, setPictures} from "./lotSlice";
import '../components/SelectionButton'
import SelectionButton from "../components/SelectionButton";
import {Button} from "react-bootstrap" 
import {Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {Image} from 'react-bootstrap';

function Lots(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [imageUrls, setImageUrls] = useState([]);

    const maxLength = 80;
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setName(value));
        dispatch(setPictures(imageUrls));
        navigate('/lot_preview');
        console.log("value is: " + value);
    }

    const handleFileChange = (e) => {
        const files = e.target.files;
        const urls = [];
        for (let i = 0; i < files.length; i++){
            const file = files[i];
            const reader = new FileReader()

            reader.onloadend = () => {

                urls.push(reader.result);

                if (urls.length === files.length){
                    setImageUrls(urls);
                }
            }
            reader.readAsDataURL(file);
        }
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
                    maxLength={maxLength}
                    rows={1}/>
                    <Form.Label className="text-white">
                        {maxLength - value.length} characters left
                    </Form.Label>
                    <br></br>

                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Upload pictures of cards (Scans preferrably)</Form.Label>
                    <Form.Control type="file" multiple onChange={handleFileChange}/>
                </Form.Group>
                
                {
                    imageUrls.map((url, index) =>
                        
                      <ul>
                        <Image key={index} src={url} 
                            width={400}
                            height={700}
                        
                        />
                      </ul>
                     
                    
                    )
                    
                }


                <br></br>

                <Button type="submit">
                    Submit 

                </Button>

            </Form>
            
        </div>
    )
}
export default Lots;
