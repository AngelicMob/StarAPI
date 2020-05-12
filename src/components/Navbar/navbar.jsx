import React from 'react';
import './navbar.css';


const Navbar = ({tab}) => {

return (

<nav className ="nav-bar-content">

    <ul>
        <li onClick = {() => tab('Search')}>Add new Info</li>
        <br></br>
        <li onClick = {() => tab('Favorite')}>Favorites</li>
    </ul>

</nav>

);

};

export default Navbar;
