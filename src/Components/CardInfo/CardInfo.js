import React, { useState } from 'react';
import './CardInfo.css'
import Swal from 'sweetalert2'

const CardInfo = ({times,setTime}) => {
     const [Bktime, setBktime] = useState(0);
     
     const handlerAddToTime = (items) => {
          setBktime(items)
     }
     const sweetAlaert = () => {
     Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
     }
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
                  <h3 className='break'>Add A Break</h3>
               <div className='break-time'>
                    <div className='items'>
                         <h3 onClick={() => handlerAddToTime(10)}>10s</h3>
                    </div>
                    <div className='items'>
                         <h3 onClick={() => handlerAddToTime(20)}>20s</h3>
                    </div>
                    <div className='items'>
                         <h3 onClick={() => handlerAddToTime(30)}>30s</h3>
                    </div>
                    <div className='items'>
                         <h3 onClick={() => handlerAddToTime(40)}>40s</h3>
                    </div>
               </div>
               <div>
                    <h3 className='break'>
                         Exercise Details
                   </h3>
               
                <div className='times'>
                    <h3> Exercise time</h3> 
                     <h4>{times} seconds</h4> 
                 </div>
                <div className='times'>
                    <h3> Break time</h3> 
                     <h4>{Bktime} seconds</h4> 
                 </div>
               </div>
               <button onClick={sweetAlaert} className='card-btn'>Activity Completed</button>
          </div>
     );
};

export default CardInfo;