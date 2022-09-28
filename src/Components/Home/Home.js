import React, { useEffect, useState } from 'react';
import CardInfo from '../CardInfo/CardInfo';
import Cards from '../Cards/Cards';
import './Home.css';

const Home = () => {

     const [card, setCard] = useState([])
     useEffect(() => {
          fetch('data.json')
          .then(res => res.json())
          .then(data=>setCard(data))
     },[])

     return (
          <div className='cards-container'>
               <div className="cards_items">
                    <Cards card={card}></Cards>
               </div>
               
               <div className="card_profile">
                   <CardInfo></CardInfo>
              </div>
          </div>
     );
};

export default Home;