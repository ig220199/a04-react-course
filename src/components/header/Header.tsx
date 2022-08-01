import React from "react";
import './Header.css'

const Header: React.FC = () => {
    return (
        <header className="header__container">
            <div className="header__slogan">
                <h2>Enjoy your travels</h2>
                <h3>with Staycation and collect rewards</h3>
                <h4>Book now & save 10% or more today</h4>
            </div>
        </header>
    );
}

export default Header;
