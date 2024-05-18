import React, { useState, useEffect } from 'react';
import CardStar from './CardStar';

const ImageBlob = ({ jsons }) => {
  const [imageSrcs, setImageSrcs] = useState([]);

  useEffect(() => {
    if (jsons && jsons.length > 0) {
      const srcs = jsons.map((json) => json);
      setImageSrcs(srcs);
    }
  }, [jsons]);

  return (
    <div >
      {imageSrcs.map((src, index) => (
      
      
      <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img key={index} src={src.image} alt={`Blob Image ${index + 1}`} />
                  <img src="../../assets/images/popular-1.jpg" alt="San miguel, italy" loading="lazy"></img>
                </figure>

                <div class="card-content">

                  <div class="card-rating">
                   <CardStar cardstar={src.cardstar}></CardStar>

{/*                   
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon> */}
                  </div>

                  <p class="card-subtitle">
                    <a href="#">{src.cardsubtitle}</a>
                  </p>

                  <h3 class="h3 card-title">
                    <a href="#">{src.cardtitle}</a>
                  </h3>

                  <p class="card-text">
                  {src.cardtext}
                  </p>

                </div>

              </div>
            </li>




        
      ))}
    </div>
  );
};

export default ImageBlob;
