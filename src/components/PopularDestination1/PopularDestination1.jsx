import React from 'react';
// import './Header.css';
import ImageBlob from '../ImageBlob/ImageBlob';

const PopularDestination1 = ({popularimg}) => {
  return (
    <>
    
    <section class="popular" id="destination">
        <div class="container">

          <p class="section-subtitle">Uncover place</p>

          <h2 class="h2 section-title">Popular destination</h2>

          <p class="section-text">
 Explore our handpicked collection of destinations, curated to inspire and ignite your wanderlust. From exotic getaways to cultural odysseys, we've got something for every type of traveler.
          </p>

          <ul class="popular-list">
          <ImageBlob jsons={popularimg} />

            {/* <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img src="../../assets/images/popular-1.jpg" alt="San miguel, italy" loading="lazy"></img>
                </figure>

                <div class="card-content">

                  <div class="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p class="card-subtitle">
                    <a href="#">Italy</a>
                  </p>

                  <h3 class="h3 card-title">
                    <a href="#">San miguel</a>
                  </h3>

                  <p class="card-text">
                    about this place
                  </p>

                </div>

              </div>
            </li> */}

            {/* <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img src="./assets/images/popular-2.jpg" alt="Burj khalifa, dubai" loading="lazy"></img>
                </figure>

                <div class="card-content">

                  <div class="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p class="card-subtitle">
                    <a href="#">Dubai</a>
                  </p>

                  <h3 class="h3 card-title">
                    <a href="#">Burj khalifa</a>
                  </h3>

                  <p class="card-text">
                    about this place
                  </p>

                </div>

              </div>
            </li> */}

            {/* <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img src="./assets/images/popular-3.jpg" alt="Kyoto temple, japan" loading="lazy">
                    </img>
                </figure>

                <div class="card-content">

                  <div class="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p class="card-subtitle">
                    <a href="#">Japan</a>
                  </p>

                  <h3 class="h3 card-title">
                    <a href="#">Kyoto temple</a>
                  </h3>

                  <p class="card-text">
                    about this place
                  </p>

                </div>

              </div>
            </li> */}

          </ul>

          <button class="btn btn-primary">More destintion</button>

        </div>
      </section>



    </>
   
  );
};

export default PopularDestination1;
