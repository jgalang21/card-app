import React from "react";
import "../App.css";
import {Button} from "react-bootstrap" 
import {Link} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';


const SelectionButton = (props) => {

    return (
        <div className="d-flex gap-2 mb-2">
            <Button 
            as={Link}
            to={props.to}
            variant={props.variant} 
            size={props.size}
            >
            {props.title}
            </Button>
       </div>
    )
}
export default SelectionButton;



