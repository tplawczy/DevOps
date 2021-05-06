import React, { useState, useEffect } from "react";
import axios from 'axios';

const Rowery = (props) => {
    const [rowery, setRowery] = useState([]);
    const [rower, setRower] = useState([]);



    useEffect(() => {

        const fetchData = async () => {
            axios.get('http://localhost:5000/rowery')
                .then(response => setRowery(response.data))
                .catch(error => console.log(error));
        };
        const timer = setTimeout(() => {
            fetchData();
        }, 200);

        return () => clearTimeout(timer);
    }, [props.changed1, props.changed2, props.changed3]);





    // const handleNumberChange = (event ) => {
    //     setNumber(event.target.value);
    //     props.changeParentHandler(event.target.value);  

    // }
    //   const handleClick = (event) => {
    //      const e = () => { props.changeParentHandler3(rower) }
    //  }


    return (
        <>

            <div className="Rowery">
                <h1>Dodaj Rower</h1>
                {rowery.map(rower => (<div key={rowery.id} >
                    Id:&nbsp;{rower.id}&nbsp;&nbsp;
                Marka:&nbsp;{rower.marka}&nbsp;&nbsp;
                Model:&nbsp;{rower.model}&nbsp;&nbsp;
                Cena:&nbsp;{rower.cena}&nbsp;&nbsp;
                Typ:&nbsp;{rower.typ}&nbsp;&nbsp;
                Ilosc:&nbsp;{rower.ilosc}&nbsp;&nbsp;
                    <button class="button" onClick={() => { props.changeParentHandler3(rower) }}>Edytuj</button>&nbsp;&nbsp;
                </div>))}
            </div>


        </>
    );
}



export default Rowery;