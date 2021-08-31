import React from 'react'
import './Card.css';

function Card({ title, body }) {
    return (
        <div className="card">
            <div className="title">
                {title}
            </div>
            <div className="card-body">
                {body}
            </div>
        </div>
    );
};


export default Card;