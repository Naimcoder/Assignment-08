import React, { useEffect, useState } from 'react';
import CardInfo from '../CardInfo/CardInfo';
import Cards from '../Cards/Cards';
import './Home.css';

const Home = () => {
     const [card, setCard] = useState([])

     const [time, setTime] = useState([])
     
     useEffect(() => {
          fetch('data.json')
          .then(res => res.json())
          .then(data=>setCard(data))
     },[])

     return (
          <div className='cards-container'>
               <div className="cards_items">
                    <Cards card={card} times={time}setTime={setTime}></Cards>
               </div>
               
               <div className="card_profile">
                   <CardInfo times={time}setTime={setTime}></CardInfo>
              </div>
          </div>
     );
};

export default Home;