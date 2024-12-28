import React from "react";
import '../App.css';
import '../components/SelectionButton'
import SelectionButton from "../components/SelectionButton";
import { useNavigate } from "react-router-dom";

function Singles(){

    const navigate = useNavigate()

    const handleBackClick = () =>{
        navigate('/');
    };

    return (
        <div className="header">

            <SelectionButton
                to={handleBackClick()}
                variant={"primary"}
                title="Back to home"
                size="sm"
             
             />
             <h1 className="intro--header">List single cards</h1>
 
        </div>
    )
}
export default Singles;