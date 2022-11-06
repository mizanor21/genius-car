import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className="flex justify-center  text-center my-10">
                <div className="w-1/2">
                    <h3 className="text-xl font-bold text-yellow-500">Services</h3>
                    <h2 className='text-5xl font-bold my-5'>Our Service Area</h2>
                    <p className='text-lg'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>

            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* <h1>{services.length}</h1> */}
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;