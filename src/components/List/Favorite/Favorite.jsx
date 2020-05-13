import './Favorite.css';
import React, {useState} from 'react';

const FavoriteItems = ({setFavPeople, setFavPlanet, removeFav}) => {
    const [category, setCategory] = useState('All');


    const FavoritePeople = setFavPeople
    .map((e) => (
        <div className='card' key={e.name}>
          <div className='card-container'>

            <div className="cards">
                <h3>Character</h3>
                <div className ="info-cards">
                  <div>Name: {e.name}</div>
                  <div>Eye-color: {e.eye_color}</div>
                  <div>Age: {e.birth_year}</div>
                  <div>Hair-color: {e.hair_color}</div>

                </div>
            <button className='removeButton'  onClick={() => removeFav(e, 'people')}>
              Remove from Favorites
            </button>

            </div>
          </div>
        </div>
      ))

      const FavoritePlanet = setFavPlanet
        .map((e) => (
            <div className='card' key={e.name}>
                <div className='card-container'>
                    <div className = "cards">
                        <h3>Planet</h3>

                    <div className ="info-cards">
                        <div>Name: {e.name}</div>
                        <div>Climate: {e.climate}</div>
                        <div>Terrain: {e.terrain}</div>

                    </div>
            <button className='removeButton' onClick={() => removeFav(e, 'planets')}>
                    Remove from Favorites
                    </button>
                    </div>
                </div>
            </div>
      ))



      const AllCategory = [...FavoritePeople, ...FavoritePlanet]
      function categorySelects(category) {

        if (category === 'All') {

            return AllCategory;
        }
        else if(category === 'people') {

            return FavoritePeople;

        }
        else {
            return FavoritePlanet;
        }

    }

        return (

            <div className="AllAddedFavorites">

            <div className ="button-group">
                <button className ="removeButton" onClick={() => setCategory('All')}>All</button>
                <button className ="removeButton" onClick={() => setCategory('people')}>Favorite People</button>
                <button className ="removeButton" onClick={() => setCategory('planet')}>Favorite Planets</button>
            </div>
            <ul className ="category-buttons">
                    <li>{categorySelects(category)}</li>
            </ul>


            </div>

    )

};

export default FavoriteItems;
