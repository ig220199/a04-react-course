import React from "react";
import './AccommodationDetails.css';

const AccommodationDetails: React.FC<{ details: {
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
    const startImage = require('../../../assets/images/star.png');
    const calendarImage = require('../../../assets/images/calendar.png');

    const categorizationRender = (categorization: number) => {
        let content = [];

        for(let i = 0; i < categorization; i++) {
            content.push(<img src={ startImage } />);
        }

        return content;
    }

    return(
        <div className="accommodation-details__container">
            <h1>{props.details.title} <span>{categorizationRender(props.details.categorization)}</span></h1>
            <p>{props.details.subtitle}</p>
            {props.details.freeCancelation &&
                <div className="accommodation-details__free-cancellation"><img src={calendarImage} /> <b>Free cancellation available</b></div>
            }
            <pre>{props.details.description}</pre>
        </div>
    );
}

export default AccommodationDetails;
