import React from "react";
import './SectionHeader.css';

// treba naknadno dodati i router link property
const SectionHeader: React.FC<{
    title: string,
    arrowLabel: string
}> = (props) => {
    const arrowImg = require('../../assets/images/arrow-right.png');

    return(
        <div className="section-header__container">
            <h2>{ props.title }</h2>
            <div>
                <a>{ props.arrowLabel } <img src={arrowImg} /></a>
            </div>
        </div>
    );
}

export default SectionHeader;
