import React, { useState, useEffect } from "react";
import axios from 'axios';


const DodajRower = (props) => {

    const [marka, setMarka] = useState("");
    const [model, setModel] = useState("");
    const [cena, setCena] = useState("");
    const [typ, setTyp] = useState("");
    const [ilosc, setIlosc] = useState("");
    const [count1, setCount1] = useState(1);



    const handleSubmit = (event) => {
        console.log(`Dane do wyslania ${marka} ${model} ${cena} ${typ} ${ilosc}`);
        axios.post('http://localhost:5000/rowery', {
            marka: marka,
            model: model,
            cena: cena,
            typ: typ,
            ilosc: ilosc,
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))

        event.preventDefault();
        setCount1(count1 + 1);
        props.changeParentHandler1(count1)
        //setTimeout(() => { console.log("World!"); }, 2000);
        //setCount1(count + 1)
        //props.changeParentHandler(count);
    };



    return (
        <>
            <h1>Dodaj Rower</h1>
            <label name="dodajrower1">Marka:</label>
            <input id="dodajrower1" type='text' value={marka} onChange={event => setMarka(event.target.value)} /><br />
            <label name="dodajrower2">Model:</label>
            <input id="dodajrower3" type='text' value={model} onChange={event => setModel(event.target.value)} /><br />
            <label name="dodajrower4">Cena:</label>
            <input id="dodajrower4" type='numbers' value={cena} onChange={event => setCena(event.target.value)} /><br />
            <label name="dodajrower5">typ:</label>
            <input id="dodajrower5" type='text' value={typ} onChange={event => setTyp(event.target.value)} /><br />
            <label name="dodajrower4">ilosc</label>
            <input id="dodajrower6" type='text' value={ilosc} onChange={event => setIlosc(event.target.value)} /><br />
            <input type='submit' value='OK' onClick={handleSubmit} />
        </>
    );
};

export default DodajRower;
