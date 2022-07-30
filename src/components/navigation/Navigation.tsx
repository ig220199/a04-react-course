import React from "react";
import './Navigation.css';

const Navigation: React.FC = () => {
    return (
        <nav className="navigation__container navigation__flex">
            <h1>Staycation</h1>
            <ul className="navigation__ul">
                <li>Locations</li>
                <li>My Places</li>
                <li>My Bookings</li>
            </ul>
            <span>LOGOUT</span>
        </nav>
    );
}

export default Navigation;
