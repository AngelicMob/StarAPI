import React, {useState, useEffect} from 'react';
import './list.css';
import axios from 'axios';

let people = [];

const List = () => {

    const peopleUrl = 'https://swapi.dev/api/people/';
    const planetsUrl = 'https://swapi.dev/api/planets/';
    const [characters, setCharacters ] = useState([]);


    useEffect(() => {
        for(let i = 1; i< 10;i++){

          axios.get(peopleUrl+'?page='+i)
          .then(res => {
            people.push(...res.data.results)
            setCharacters([...people])
          })
          .catch(err => console.log(err))
        }

    },[])

    function Test () {

        console.log(characters);
    }
    return (

        <div className="list-content">

        <button className = "buttontest" onClick = {Test}>Button</button>


        </div>

    );

};

export default List;


