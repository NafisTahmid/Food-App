import React from 'react';
import carousel1 from '../../images/carousel-1.PNG'
import carousel2 from '../../images/carousel-2.PNG'
import carousel3 from '../../images/carousel-3.PNG'
import './Carousel.css'

const Carousel = () => {
    return (

        <div className="container pt-0 mt-0">
             <div id="carouselExampleIndicators" className="carousel ">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
           
                </div>
                <div className="carousel-inner">
                    <div class="carousel-item active">
                        <img src={carousel1} className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
        </div>
       
    );
};

export default Carousel;