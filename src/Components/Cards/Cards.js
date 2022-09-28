import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import "./Cards.css"

const Cards = ({card}) => {
     return (
          <div>
               <div style={{color:'blue',margin:"10px 20px"}}>
                    <h1 className='logo'>GYM-ACTIVE-ClUB</h1>
               </div>
                <h3 className='title-head'>Select today’s exercise Gym..</h3>
               <div className='card-container'>
               {
                 card.map(Cd=><SingleCard SingleCard={Cd}></SingleCard>)        
               }
               </div>
          </div>
     );
};

export default Cards;