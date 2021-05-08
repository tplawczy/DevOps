import React, { useState, useEffect } from "react";
import axios from 'axios';


const EdytujRower = (props) => {

    const [id, setId] = useState('')
    const [marka, setMarka] = useState('')
    const [model, setModel] = useState('')
    const [cena, setCena] = useState('')
    const [typ, setTyp] = useState('')
    const [ilosc, setIlosc] = useState('')
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);
    const [edit, SetEdit] = useState('')

    useEffect(() => {
        setMarka(props.currentRower.marka);
        setModel(props.currentRower.model);
        setCena(props.currentRower.cena);
        setTyp(props.currentRower.typ);
        setIlosc(props.currentRower.ilosc);

    }, [props.currentRower]);


    const handleSubmitEdit = (event) => {


        axios.put(`/rowery/${props.currentRower.id}`, {

            marka: marka,
            model: model,
            cena: cena,
            typ: typ,
            ilosc: ilosc,
        })

            .then(response => console.log(response))
            .catch(error => console.log(error));

        setCount2(count2 + 1);
        props.changeParentHandler2(count2)
        setMarka("");
        setModel("");
        setCena('');
        setTyp('');
        setIlosc('');
        event.preventDefault();
    };


    const onInputChangeMarka = (event) => {
        setMarka(event.target.value);
        event.preventDefault();
    };
    const onInputChangeModel = (event) => {
        setModel(event.target.value);
        event.preventDefault();
    };
    const onInputChangeCena = (event) => {
        setCena(event.target.value);
        event.preventDefault();
    };
    const onInputChangeTyp = (event) => {
        setTyp(event.target.value);
        event.preventDefault();
    };
    const onInputChangeIlosc = (event) => {
        setIlosc(event.target.value);
        event.preventDefault();
    };
    const handleSubmitDelete = (event) => {
        axios.delete(`/rowery/${props.currentRower.id}`, {
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
            
        setCount3(count3 + 1);
        props.changeParentHandler4(count3);
    }

    return (
        <>
            <h1>Edytuj Rower </h1>

            <label >id:</label>
            <input id='edytujrower1' type='number' name="id" defaultValue={props.currentRower.id} onChange={event => setId(event.target.value)} /><br />
            <label >Marka:</label>
            <input id='edytujrower2' type='text' name="marka" value={marka} onChange={onInputChangeMarka} /><br />
            <label >Model:</label>
            <input id='edytujrower3' type='text' name="mode" value={model} onChange={onInputChangeModel} /><br />
            <label >Cena:</label>
            <input id="edytujrower4" type='number' name="cena1" value={cena} onChange={onInputChangeCena} /><br />
            <label >typ:</label>
            <input id="edytujrower5" type='text' name="typ1" value={typ} onChange={onInputChangeTyp} /><br />
            <label >ilosc</label>
            <input id="edytujrower6" type='number' name="ilosc1" value={ilosc} onChange={onInputChangeIlosc} /><br />
            <input type='submit' value='Zapisz' onClick={handleSubmitEdit} />   <input type='submit' value='Usun' onClick={handleSubmitDelete} />
            

        </>
    );
};

export default EdytujRower;