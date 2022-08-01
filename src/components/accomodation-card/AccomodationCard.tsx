import React from "react";
import './AccomodationCard.css';

const AccomodationCard: React.FC = () => {
    const sugarSpiceApartments = require('../../assets/images/sugar_spice_apartments.png');
    const startImage = require('../../assets/images/star.png');
    const accommodation: {
        title: string,
        location: string,
        price: number,
        categorization: number
    } = {
        title: "Sugar & Spice Apartments",
        location: "Split",
        price: 75,
        categorization: 3
    };

    const categorizationRender = (categorization: number) => {
        let content = [];

        for(let i = 0; i < categorization; i++) {
            content.push(<img src={ startImage } key={i}/>);
        }

        return content;
    }

    return(
        <div className="accommodation-card__card">
            <img src={ sugarSpiceApartments }
                 title={ accommodation.title }
                 alt={ accommodation.title } />
            <h3>{ accommodation.title }</h3>
            <span>{ accommodation.location }</span>
            <p>EUR { accommodation.price }</p>
            { categorizationRender(accommodation.categorization) }
        </div>
    );
}

export default AccomodationCard;
