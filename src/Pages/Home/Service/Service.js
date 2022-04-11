import React from 'react';

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div>
            <img className="img-fluid" src={img} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{description}</p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;