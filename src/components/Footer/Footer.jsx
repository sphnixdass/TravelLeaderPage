import React from 'react';
// import './Header.css';

const Footer = () => {
  return (
    <>
    
  <footer class="footer">

<div class="footer-top">
  <div class="container">

    <div class="footer-brand">

      <a href="#" class="logo">
        <img src="./assets/images/Logo.png" alt="Travel Leader logo" width="193" height="52">
        </img>
      </a>

      <p class="footer-text">
Ready to embark on your next adventure? Explore our destination guides and start planning your trip of a lifetime today.
      </p>

    </div>

    <div class="footer-contact">

      <h4 class="contact-title">Contact Us</h4>

      <p class="contact-text">
        Feel free to contact and reach us !!
      </p>

      <ul>

        <li class="contact-item">
          <ion-icon name="call-outline"></ion-icon>

          <a href="tel:9884952440" class="contact-link">9884952440</a>
        </li>

        <li class="contact-item">
          <ion-icon name="mail-outline"></ion-icon>

          <a href="mailto:info.Travel Leader.com" class="contact-link">info.Travel Leader.com</a>
        </li>

        <li class="contact-item">
          <ion-icon name="location-outline"></ion-icon>

          <address>123456 India</address>
        </li>

      </ul>

    </div>

    <div class="footer-form">

      <p class="form-text">
        Subscribe our newsletter for more update & news !!
      </p>

      <form action="" class="form-wrapper">
        <input type="email" name="email" class="input-field" placeholder="Enter Your Email" required>
</input>
        <button type="submit" class="btn btn-secondary">Subscribe</button>
      </form>

    </div>

  </div>
</div>

<div class="footer-bottom">
  <div class="container">

    <p class="copyright">
      &copy; 2022 <a href="">Develped by Dass S.</a>. All rights reserved
    </p>

    <ul class="footer-bottom-list">

      <li>
        <a href="#" class="footer-bottom-link">Privacy Policy</a>
      </li>

      <li>
        <a href="#" class="footer-bottom-link">Term & Condition</a>
      </li>

      <li>
        <a href="#" class="footer-bottom-link">FAQ</a>
      </li>

    </ul>

  </div>
</div>

</footer>




<a href="#top" class="go-top" data-go-top>
<ion-icon name="chevron-up-outline"></ion-icon>
</a>





<script src="./assets/js/script.js"></script>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>


    </>
  );
};

export default Footer;