import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, prev, next, id } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="carousel-img">
                <img src={image} alt='img not found' className="" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-[37%]">
                <h1 className='font-extrabold text-7xl text-white'>
                    Affordable <br /> Price For Car <br /> Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-[61%]">
                <p className='text-lg text-white'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-2">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;