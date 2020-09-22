import React from 'react';
import './navigation.scss';

const NavBar = () => (
    <div className="Navbar">
        <div className="Navlinks" >
            <div className="Navlink">
                <a href='/home'>Home</a>
            </div>
            <div className="Navlink">
                <a href='/todos'>Todos</a>
            </div>
        </div>
    </div>
);

export default NavBar;
