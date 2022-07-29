import React from "react";
import './PropertyInfo.css';

const PropertyInfo: React.FC<{ details: {
        title: string,
        subtitle: string,
        description: string,
        type: string
        categorization: number,
        personCount: number,
        imageUrl: string,
        freeCancelation: boolean,
        price: number,
        location: string,
        postalCode: string
    } }> = (props) => {

    return(
        <div className="property-info__container">
            <h2>Property info</h2>
            <ul>
                <li>{props.details.personCount} guests</li>
                <li>{props.details.type}</li>
                <li>EUR {props.details.price} per night</li>
                <li>{props.details.location}</li>
                <li>{props.details.postalCode}</li>
            </ul>
            <button className="property-info__book-btn">BOOK YOUR STAY</button>
        </div>
    );
}

export default PropertyInfo;
