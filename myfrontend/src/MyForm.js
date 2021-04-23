import React, {useState, useEffect} from "react";
import axios from 'axios';

const MyForm = (props) =>{


        const [marka, setMarka] = useState("");
        const [model, setModel] = useState("");
        const [cena, setCena] = useState("");  
        const [ilosc, setIlosc] = useState("");
        const [typ, setTyp] = useState("");

        const handleSubmit = (event) => {
        console.log(`Dane do wysłania  ${marka} ${model}${cena}${ilosc} ${typ}`);
        axios.post('http://localhost:5000/rowery', {
        marka: marka,
        model: model,
        cena: cena,
        ilosc: ilosc,
        typ: typ

        
        })
    
        .then(function(response) {
        console.log(response);
        })

        .catch(function(error){
            console.log(error);
        });
        event.preventDefault();
    };




        return (
            <>
            <p>Dodaj rower</p>
           <p>Marka <input type = 'text' value={marka} onChange={event => setMarka(event.target.value)}/></p>
           <p>Model <input type = 'text' name='Marka' value={model} onChange={event => setModel(event.target.value)}/></p>
           <p>Cena<input type = 'text' value={cena} onChange={event => setCena(event.target.value)} /></p>
           <p>ilosc<input type = 'text' value={ilosc} onChange={event => setIlosc(event.target.value)} /></p>
           <p>typ<input type = 'text' value={typ} onChange={event => setTyp(event.target.value)} /></p>

            <input type='submit' value='OK' onClick={handleSubmit}/>
            </>
        );
        };
    export default MyForm;