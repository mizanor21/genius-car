import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="hero mb-10 bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row py-20">

                    <div className="w-1/2 relative">
                        <img src={person} alt='img not found' className="w-[85%] rounded-lg shadow-2xl" />
                        <img src={parts} alt='img not found' className="absolute right-3 top-44 border-8 w-3/5 rounded-lg shadow-2xl" />
                    </div>
                    <div className=' w-1/2'>
                        <h3 className="text-xl font-bold text-yellow-500">About Us</h3>
                        <h1 className="py-6 text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className='text-gray-500 text-lg mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='text-gray-500 text-lg mb-10'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-warning ">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;