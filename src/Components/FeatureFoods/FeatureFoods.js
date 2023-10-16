import React from 'react';
import f1 from '../../images/f1.PNG'
import f2 from '../../images/f2.PNG'
import f3 from '../../images/f3.PNG'
import f4 from '../../images/f4.PNG'
import f5 from '../../images/f5.PNG'
import f6 from '../../images/f6.PNG'
import './FeatureFoods.css'
import featureFoodsData from '../Data/featureFoodsData';
import featureFoodsData2 from '../Data/featureFoodsData2';


const FeatureFoods = () => {
    return (

        <div className="container-fluid my-3">
              <h1 class='fw-bold ms-5 ps-4 text-heading'>Feature Foods</h1>

              <div className="d-flex justify-content-center align-items-center mt-3 ">

                  {

                        featureFoodsData.map(data => 
                               <div className="feature-container">
                                  <img src={f2} width='300' className='feature-products'alt="" />
                                    <h5 className='fs-6 price-name'>{data.name}</h5>
                                    <h5 className='fs-6 price-text'>৳<span>399</span></h5>
                                    <button class='btn btn-danger feature-button'>Add to Cart</button>
                              </div>
                              
                              )
                  }
                            
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-3 ">
                        {
                              featureFoodsData2.map(data => 
                                    <div className="feature-container" key={data.id}>
                                              <img src={data.image} width='300' className='feature-products'alt="" />
                                              <h5 className='fs-6 price-name'>{data.name}</h5>
                                              <h5 className='price-text'>৳<span>{data.price}</span></h5>
                                              <button class='btn btn-danger  feature-button'>Add to Cart</button>
                                        </div>
                                    )
                        }
                   </div>
             

       
        </div>
      
           
    );
};

export default FeatureFoods;