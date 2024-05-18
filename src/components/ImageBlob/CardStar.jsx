import React from 'react';

const CardStar = ({ cardstar }) => {
   const stars = [];
  for (let i = 0; i < cardstar; i++) {
    stars.push(<ion-icon name="star"></ion-icon>);
  }

  return (
    <div className="card">
     
        {stars}
      
    </div>
  );
};

export default CardStar;
