import React from 'react';
import m1 from '../../images/m1.PNG'
import m2 from '../../images/m2.PNG'
import m3 from '../../images/m3.PNG'
import m4 from '../../images/m4.PNG'
import m5 from '../../images/m5.PNG'
import m6 from '../../images/m6.PNG'
import './Menu.css'
import menuFoodData from '../Data/menuFoodData';
import menuFoodData2 from '../Data/menuFoodData2';

const Menu = () => {
    return (
        <div className="container-fluid my-3">
        <h1 class='fw-bold ms-5 ps-4 text-heading'>Menu</h1>

        <div className="d-flex justify-content-center align-items-center mt-3 ">

            {
                  menuFoodData.map(data => 
                        
                        <div className="feature-container" key={data.id}>
                              <img src={data.image} width='300' className='feature-products'alt="" />
                        
                         </div>
                        )
            }
           
           
           
        </div>

        <div className="d-flex justify-content-center align-items-center mt-3 ">

            {
                  menuFoodData2.map(data => 
                        
                        <div className="feature-container" key={data.id}>
                        <img src={data.image} width='300' className='feature-products'alt="" />
                        
                  </div>
                        )
            }
          
        </div>

  </div>
    );
};

export default Menu;