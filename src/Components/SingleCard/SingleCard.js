import React, { useEffect } from 'react';
import "./SingleCard.css";

const SingleCard = ({SingleCard,times,setTime}) => {
     const { image, title, id, age, time } = SingleCard
 
     const addToCard = () => {
          const info = parseInt(time)
          if (times) {
               const newtime = parseInt(times + info)
               setTime(newtime)
          }
        console.log(info)
     }
     
     return (
          <div className='card'>
               <img src={image} alt="" />
               <div className="card-info">
                    <h2>{title}</h2>
                    <p>Amet minim mollit non deserunt 
                     ullamco est sit aliqua dolor do 
                   amet sint</p>
                    <h4>For Age :   {age}</h4>
                    <h4>Time required :   {time}<span><small>s</small></span></h4>
                    <button onClick={addToCard} className='Card-btn'>Add To Card</button>
               </div>
          </div>
     );
};

export default SingleCard;