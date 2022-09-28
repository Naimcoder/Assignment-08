import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

import './Home.css'
const Home = () => {

     const [card, setCard] = useState([])
     useEffect(() => {
          fetch('data.json')
          .then(res => res.json())
          .then(data=>setCard(data))
     },[])

     return (
          <div className='card-container'>
               <div className="cards_items">
                    <Cards card={card}></Cards>
               </div>
               
               <div className="card_profile">
                    <h2>this card profile</h2>
              </div>
          </div>
     );
};

export default Home;