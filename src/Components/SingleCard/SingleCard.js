import React from 'react';
import "./SingleCard.css";

const SingleCard = (props) => {
     const {image,title,id,age,time}=props.SingleCard
console.log(props)
     return (
          <div className='card'>
               <img src={image} alt="" />
               <div className="card-info">

               </div>
          </div>
     );
};

export default SingleCard;