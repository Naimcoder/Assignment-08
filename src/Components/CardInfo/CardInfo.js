import React from 'react';
import './CardInfo.css'
const CardInfo = () => {
     return (
          <div>
               <div className='card-profile'>
                    <div className='card-img'>
                           <img src="" alt="" />
                    </div>
                   
                    <div className='card-name'>
                        <h3>Md. Naimul Islam</h3>
                        <p>Dhaka, Bangladesh</p>   
                    </div>
                    
               </div>
               <div className='inbio'>
                    <div className='wigth'>
                         <h3>52<small>kg</small></h3>
                         <p>Wigth</p>
                    </div>
                    <div className='height'>
                      <h3>5.7</h3>
                         <p>Height</p>
                    </div>
                    <div className='age'>
                         <h3>24<small>yrs</small></h3>
                         <p>Age</p>
                    </div>
               
               </div>
          </div>
     );
};

export default CardInfo;