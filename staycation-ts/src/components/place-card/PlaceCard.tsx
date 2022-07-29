import React from "react";
import './PlaceCard.css';

const PlaceCard: React.FC = () => {
    const treehouseImage = require('../../assets/images/treehouse.png');

    const placeCard: {
        title: string,
        location: string,
        subtitle: string
    } = {
        "title": "Treehouse",
        "location": "Hrusice",
        "subtitle": "Renting entire unit"
    };

    return(
        <div className="place-card__card">
            <img src={ treehouseImage }
                 title={ placeCard.title }
                 alt={ placeCard.title } />
            <h3>{ placeCard.title }</h3>
            <span>{ placeCard.location }</span>
            <p>Renting the entire unit</p>
            <button className="place-card__edit-btn">EDIT</button>
            <button className="place-card__delete-btn">DELETE PLACE</button>
        </div>
    );
}

export default PlaceCard;
