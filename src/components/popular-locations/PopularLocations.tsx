import React from "react";
import './PopularLocations.css';

const PopularLocations: React.FC = () => {
    const arrowImg = require('../../assets/images/arrow-right.png');

    return(
        <div className="popular-locations__container">
            <h2>Popular locations</h2>
            <div>
                <a>View all locations <img src={arrowImg} /></a>
            </div>
        </div>
    );
}

export default PopularLocations;
