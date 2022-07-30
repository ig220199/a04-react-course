import React from "react";
import './HomesGuestsLove.css';

const HomesGuestsLove: React.FC = () => {
    const arrowImg = require('../../assets/images/arrow-right.png');

    return(
        <div className="homes-guests-love__container">
            <h2>Homes guests love</h2>
            <div>
                <a>View all homes <img src={arrowImg} /></a>
            </div>
        </div>
    );
}

export default HomesGuestsLove;
