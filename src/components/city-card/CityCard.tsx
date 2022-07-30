import React from "react";
import './CityCard.css';
import NumberFormat from "../number-format/NumberFormat";

const CityCard: React.FC = () => {
    const londonImage = require('../../assets/images/london.png');
    const city: {
        name: string,
        count: number
    } = {
        name: "London",
        count: 5102
    };

    return (
        <div className="city-card__card">
            <img src={ londonImage }
                 title={ city.name }
                 alt={ city.name } />
            <h3>{ city.name }</h3>
            <p><NumberFormat number={ city.count }/> <span>properties</span></p>
        </div>
    );
}

export default CityCard;
