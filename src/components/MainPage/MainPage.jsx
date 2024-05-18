import React from 'react';
import PopularDestination1 from '../PopularDestination1/PopularDestination1';
import PopularPackage2 from '../PopularPackage2/PopularPackage2';


// import './Header.css';

// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <img src="https://example.com/logo.png" alt="Logo" />
//       <h1>My App Header</h1>
//     </header>
//   );
// };

// export default Header;



const MainPage = ({popularimg}) => {
  return (
   <>


<main>
    <article>

   
      <section class="hero" id="home">
        <div class="container">

          <h2 class="h1 hero-title">Journey to explore world</h2>

          <p class="hero-text">
Embark on your next adventure with us! Welcome to a world of wanderlust and discovery.
          </p>

          <div class="btn-group">
            <button class="btn btn-primary">Learn more</button>

            <button class="btn btn-secondary">Book now</button>
          </div>

        </div>
      </section>


      <section class="tour-search">
        <div class="container">

          <form action="" class="tour-search-form">

            <div class="input-wrapper">
              <label for="destination" class="input-label">Search Destination*</label>

              <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                class="input-field"></input>
            </div>

            <div class="input-wrapper">
              <label for="people" class="input-label">Pax Number*</label>

              <input type="number" name="people" id="people" required placeholder="No.of People" class="input-field">
 </input>
            </div>

            <div class="input-wrapper">
              <label for="checkin" class="input-label">Checkin Date**</label>

              <input type="date" name="checkin" id="checkin" required class="input-field">
              </input>
            </div>

            <div class="input-wrapper">
              <label for="checkout" class="input-label">Checkout Date*</label>

              <input type="date" name="checkout" id="checkout" required class="input-field">
              </input>
            </div>

            <button type="submit" class="btn btn-secondary">Inquire now</button>

          </form>

        </div>
      </section>



<PopularDestination1 popularimg={popularimg}></PopularDestination1>
<PopularPackage2></PopularPackage2>


      <section class="gallery" id="gallery">
        <div class="container">

          <p class="section-subtitle">Photo Gallery</p>

          <h2 class="h2 section-title">Photo's From Travellers</h2>

          <p class="section-text">
Whether you're a seasoned explorer or a first-time adventurer, we're here to guide you every step of the way. Join us on a journey of discovery, where the destination is just the beginning.
          </p>

          <ul class="gallery-list">

            <li class="gallery-item">
              <figure class="gallery-image">
                <img src="./assets/images/gallery-1.jpg" alt="Gallery image">
                </img>
              </figure>
            </li>

            <li class="gallery-item">
              <figure class="gallery-image">
                <img src="./assets/images/gallery-2.jpg" alt="Gallery image">
                </img>
              </figure>
            </li>

            <li class="gallery-item">
              <figure class="gallery-image">
                <img src="./assets/images/gallery-3.jpg" alt="Gallery image">
                </img>
              </figure>
            </li>

            <li class="gallery-item">
              <figure class="gallery-image">
                <img src="./assets/images/gallery-4.jpg" alt="Gallery image">
                </img>
              </figure>
            </li>

            <li class="gallery-item">
              <figure class="gallery-image">
                <img src="./assets/images/gallery-5.jpg" alt="Gallery image">
                </img>
              </figure>
            </li>

          </ul>

        </div>
      </section>






      <section class="cta" id="contact">
        <div class="container">

          <div class="cta-content">
            <p class="section-subtitle">Call To Action</p>

            <h2 class="h2 section-title">Ready For Unforgatable Travel. Remember Us!</h2>

            <p class="section-text">
Indulge your wanderlust with our carefully curated selection of destinations. From bustling metropolises to tranquil retreats, we've handpicked the perfect spots to satisfy your travel cravings.

Discover the vibrant street markets of Marrakech, wander the historic cobblestone streets of Prague, or unwind on the pristine shores of the Maldives. With insider tips, detailed itineraries, and local insights, we'll help you make the most of your journey.
            </p>
          </div>

          <button class="btn btn-secondary">Contact Us !</button>

        </div>
      </section>

    </article>
  </main>




   </>
  );
};

export default MainPage;