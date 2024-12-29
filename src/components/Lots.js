import React, {useState} from "react";
import '../App.css';
import '../components/SelectionButton'
import SelectionButton from "../components/SelectionButton";

import {Form} from 'react-bootstrap';

function Lots(){


    const [value, setValue] = useState('');
    const [filePreviews, setFilePreviews] = useState([]); 
    const maxLength = 80;
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const previews = files.map((file) => {
          if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            const promise = new Promise((resolve) => {
              reader.onload = (e) => resolve(e.target.result); 
              reader.readAsDataURL(file);
            });
            return promise;
          }
          return null; 
        });
    
        Promise.all(previews).then((resolvedPreviews) => {
          setFilePreviews(resolvedPreviews.filter((url) => url)); 
        });

       
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("done", value);
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

            {/** Subject to change, i want this to be drag and drop **/ }
            <Form.Control type="file" multiple onChange={handleFileChange} />


                <div className="image-preview-container">
                {filePreviews.map((preview, index) => (
                    <img
                    key={index}
                    src={preview}
                    alt={`Preview ${index}`}
                    className="image-preview"
                    style={{
                        maxWidth: "100px",
                        margin: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                    }}
                    />
                ))}
                </div>
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


                <SelectionButton
                to="/lot_preview"
                variant={"primary"}
                title="Submit Lot"   
                size="sm"
             
                 />        
            </Form>
            
        </div>
    )
}
export default Lots;
