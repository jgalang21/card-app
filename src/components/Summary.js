import React from "react";
import '../App.css';
import '../components/SelectionButton'
import { useSelector, useDispatch } from 'react-redux';
import {Image} from 'react-bootstrap';
import {Button} from "react-bootstrap" 
import { CSVLink, CSVDownload } from "react-csv";

function Summary(){

    const lotName = useSelector((state) => state.lot.lotName);
    const preview = useSelector((state) => state.lot.lotPictures);
    const csvData = [
        ["Name of the Card", "Front", "Back"],

      ];

      const x = [];

    return (
        <div className="header">

           <h1>Ready to list?</h1>
           <h3>Here is a list of what you've uploaded.</h3>
           <br></br>
           <h4>Name: {lotName}</h4>

           <br></br>
           <h3>Scans that will be used in the upload </h3>
            
           {
            preview.map(
                (url, index) => 
                    
                {
           
                    x.push(url);
                  
                    return(
                        <Image
                        key={index}
                        src={url}
                        width={400}
                        height={700}   
                        />
                    )
                }
            
            )
           }
           {
            csvData.push(x)
           }
     
           <h4>Assuming everything looks good, click the export to ebay button below:</h4>
           
           <CSVLink data={csvData}>Download me</CSVLink>;


        </div>
    )
}
export default Summary;