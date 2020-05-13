import './list-item.css';
import React, {useState} from 'react';


const ListItem = ({peopleInfo, planetsInfo, addFavo}) => {

  const [input, setInput] = useState('');

  const peopleData = peopleInfo
    .filter(
      (el) =>
        el.name.toLowerCase().match(input.toLowerCase()) ||
        el.eye_color.toLowerCase().match(input.toLowerCase()) ||
        el.birth_year.toLowerCase().match(input.toLowerCase()) ||
        el.hair_color.toLowerCase().match(input.toLowerCase())
    )
    .map((e) => (
      <div className='card' key={e.name}>
        <div className='card-container'>
        <br></br>
        <br></br>

        <div className ="cards">
                <h3>Character</h3>

              <div className ="info-cards">
                <div>Name: {e.name}</div>
                <div> Eye-color: {e.eye_color}</div>
                <div> Age: {e.birth_year}</div>
                <div> Hair-color: {e.hair_color}</div>

              </div>

          <button className='favoriteButton' onClick={() => addFavo(e, 'people')}>
                Add To Favorites
          </button>
        </div>


        </div>
      </div>
    ))

  const planetData = planetsInfo
    .filter(
      (el) =>
        el.name.toLowerCase().match(input.toLowerCase()) ||
        el.climate.toLowerCase().match(input.toLowerCase()) ||
        el.terrain.toLowerCase().match(input.toLowerCase())
    )
    .map((e) => (
      <div className='card' key={e.name}>
        <div className='card-container'>
          <div className = "cards">
                <h3>Planet</h3>
              <div className ="info-cards">
                <div>Name: {e.name}</div>
                <div> Climate: {e.climate}</div>
                <div> Terrain: {e.terrain}</div>

              </div>

            <button className='favoriteButton' onClick={() => addFavo(e, 'planets')}>
              Add To Favorites
            </button>
          </div>
        </div>
      </div>
    ))

    const PeopleAndplanetFilter = [...peopleData,...planetData];

    return (

          <div className ="list-content">

            <div className="search-bar">
              <div className="search">
                <div>
                  <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="      Search . . ." required></input>
                </div>
              </div>
            </div>


                <div className = "list">

                  {PeopleAndplanetFilter}

                </div>

          </div>

        );

};

export default ListItem;
