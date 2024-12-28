import React from "react";
import '../App.css';
import '../components/SelectionButton'
import SelectionButton from "../components/SelectionButton";
import { useNavigate } from "react-router-dom";

function Lots(){

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

             <h1 className="intro--header">Create a new Lot</h1>



            
 
        </div>
    )
}
export default Lots;
// https://betterprogramming.pub/how-to-implement-files-drag-and-drop-in-react-22cf42b7a7ef