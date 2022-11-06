import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between">
                        <h3 className='text-lg font-bold text-yellow-500'>Price: ${price}</h3>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;