import React from 'react'
import '../App.css';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';

const Cards = () => {
  let history = useHistory();
    const cards = [
      {
        title: 'Card 1',
        route: '/card1'
      },
      {
        title: 'Card 2',
        route: '/card2'
      },
      {
        title: 'Card 3',
        route: '/card3'
      }
    ];

  return (
    <div className="App">
      <div className="cardsHolder">
          {
            cards.map(e => (
              <Card title={e.title} onClick={() => history.push(e.route)} />
            ))
          }
      </div>
    </div>
  )
};

export default Cards;
