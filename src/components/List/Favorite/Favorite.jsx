import './Favorite.css';
import React from 'react';

const FavoriteItems = ({setFavPeople, setFavPlanet}) => {

    const FavoritePeople = setFavPeople

    .map((e) => (
        <div className='card' key={e.name}>
          <div className='card-container'>

            <div className="cards">
            <hr></hr>
                <h4>Character</h4>
                  <div>Name: {e.name}</div>
                  <div>Eye-color: {e.eye_color}</div>
                  <div>Age: {e.birth_year}</div>
                  <div>Hair-color: {e.hair_color}</div>
                  <hr></hr>
            <button className='favoriteButton'>
              Add To Favorites
            </button>
            <hr></hr>
            </div>
          </div>
        </div>
      ))


      const FavoritePlanet = setFavPlanet

        .map((e) => (
            <div className='card' key={e.name}>
            <div className='card-container'>
                <div className = "cards">
                    <h4>Planet</h4>
                <hr></hr>
                    <div>Name: {e.name}</div>
                    <div>Climate: {e.climate}</div>
                    <div>Terrain: {e.terrain}</div>
                    <hr></hr>
                <button className='favoriteButton'>
                    Add To Favorites
                </button>
                </div>
            </div>
            </div>
      ))


        return (

            <div className="AllAddedFavorites">
            <div>{FavoritePeople}</div>
            <div>{FavoritePlanet}</div>
            </div>

    )


};

export default FavoriteItems;
