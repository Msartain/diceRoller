import React from 'react';
import './Die.css'

const Die = (props) => {
    // const shakingClass = props.rolling ? 'shaking' : 'notShaking';
    return (
        <div className="Die">
            <i class={`fas fa-dice-${props.num} ${props.rolling && 'shaking'}`}></i>
            {/* <i class={`fas fa-dice-${props.num} ${shakingClass}`}></i> */}
        </div>
    )
}

export default Die;
