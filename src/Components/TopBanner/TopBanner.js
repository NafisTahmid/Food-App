import React from 'react';
import logo from '../../images/main-logo.png'
import '../TopBanner/TopBanner.css'

const TopBanner = () => {
    return (

        <div className="container-fluid">
             <div className="d-flex justify-content-center align-items-center logo-search-bar">
                <img src={logo} className='img-fluid' alt="" />
                <input type="text" placeholder='Enter you Favorite Food' className='search-bar'/>
                <button className='btn btn-danger ms-2'>Search</button>
            </div>
        </div>

       
       
    );
};

export default TopBanner;