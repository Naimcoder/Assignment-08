import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import "./Cards.css"

const Cards = ({card}) => {
     console.log(card)
     return (
          <div className='cards-container'>
               {/* <div>
                  <h1 className='logo'>GYM-ACTIVE-ClUB</h1>
               </div> */}
               <div className='card-container'>
               {
                 card.map(Cd=><SingleCard SingleCard={Cd}></SingleCard>)        
               }
               </div>
          </div>
     );
};

export default Cards;