import React, {useState, useEffect} from "react";
import axios from 'axios';

const Post = (props) => {
    
    const [rowery, setRowers] = useState([]);
    const [number, setNumber] = useState(-1);
     

    useEffect( () => {
        axios.get('http://localhost:5000/rowery/', {
           
            params: {
                cena: 250
              }
           
         })
          .then(response=> setRowers(response.data))
          .catch(error => console.log(error));
          
                
    }, [] );
    const handlePostClick = (event) => {
        console.log(event.target);
    }

        const handleNumberChange = (event) => {
        setNumber(event.target.value);
        props.changeParentHandler(event.target.value);
        };

    return (
        <>
            <div> 
                 {rowery
            .slice(0, props.noPosts)
            .map(rowery =>(<div  key = {rowery.produktid} onClick={handlePostClick}>Marka: {rowery.marka},Model: {rowery.model},Cena:  {rowery.cena}, Ilość:  {rowery.ilosc}, Typ:  {rowery.typ}</div>))}
            </div>

            
        
            <div>
                <div>Number {number}</div>
                <input onChange={handleNumberChange}/>
            </div>
       </>
    );

};
export default Post;