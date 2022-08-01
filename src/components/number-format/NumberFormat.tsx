import React from "react";

const NumberFormat: React.FC<{ number: number }> = (props) => {
    return (
        <span>{ props.number.toLocaleString() }</span>
    );
}

export default NumberFormat;
