import React, { useState, useEffect } from "react";
import ListItem from "./ListItem/list-item";
import FavoriteItems from "./Favorite/Favorite";
import "./list.css";
import axios from "axios";

let people = [];
let planets = [];

const PeopleFavSection = [];
const PlanetsFavSection = [];

function requestAPIPeople(setCharacters, peopleUrl) {
  for (let i = 1; i < 10; i++) {
    axios
      .get(peopleUrl + "?page=" + i)
      .then((res) => {
        people.push(...res.data.results);
        setCharacters([...people]);
      })
      .catch((err) => console.log(err));
  }
}

function requestAPIPlanets(setPlanet, planetsUrl) {
  for (let i = 1; i < 7; i++) {
    axios
      .get(planetsUrl + "?page=" + i)
      .then((res) => {
        planets.push(...res.data.results);
        setPlanet([...planets]);
      })
      .catch((err) => console.log(err));
  }
}


//storing the different people and planets saved

// List component//
const List = ({ send }) => {
  const peopleUrl = "https://swapi.dev/api/people/";
  const planetsUrl = "https://swapi.dev/api/planets/";
  const [characters, setCharacters] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const [favoritePlanets, setFavoritePlanets] = useState([]);

  useEffect(() => {
    requestAPIPeople(setCharacters, peopleUrl);
    requestAPIPlanets(setPlanet, planetsUrl);
  }, []);

  function setToFavList(id, category) {
    // takes an id element and a category upon calling this function

    //peoplefavsection
    if (category === "people") {
      if (PeopleFavSection.some((addedFav) => addedFav.name === id.name)) {
        console.log("this one already exists in your favorite list");
      } else {
        let peoplefav = [];

        peoplefav = [...peoplefav, id];
        PeopleFavSection.push(...peoplefav);
        setFavoriteCharacters([...PeopleFavSection]);
      }
    }

    //planetsfavsection
    else {
      if (PlanetsFavSection.some((addedFav) => addedFav.name === id.name)) {
        console.log("this one already exists in your favorite list");
      } else {
        let planetfav = [];

        planetfav = [...planetfav, id];
        PlanetsFavSection.push(...planetfav);
        setFavoritePlanets([...PlanetsFavSection]);
      }
    }
  }

  // function removeFromFavList(id, category) {



  // }

  return (
    <div className="list-content">
      {send === "Search" ? (


        <div className ="list-border">
          <ListItem
            peopleInfo={characters}
            planetsInfo={planet}
            addFavo={(id, category) => {
              setToFavList(id, category);
            }}
          />
        </div>
      ) : (

          <div className ="list-border">
            <FavoriteItems
              setFavPeople={favoriteCharacters}
              setFavPlanet={favoritePlanets}

            />
          </div>
      )}
    </div>
  );
};

export default List;
