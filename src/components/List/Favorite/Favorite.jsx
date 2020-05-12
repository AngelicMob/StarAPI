import './Favorite.css';
import React from 'react';

const FavoriteItems = ({setFavPeople, setFavPlanet}) => {

    const FavoritePeople = setFavPeople

    .map((e) => (
        <div className='card' key={e.name}>
          <div className='card-container'>
            <h6>Character</h6>
                  <div>Name:{e.name}</div>
                  <div>Eye-color: {e.eye_color}</div>
                  <div>Age:{e.birth_year}</div>
                  <div>Hair-color:{e.hair_color}</div>

            <button className='favoriteButton'>
              Add To Favorites
            </button>
          </div>
        </div>
      ))

return (
<div>{FavoritePeople}</div>

)
};

export default FavoriteItems;
