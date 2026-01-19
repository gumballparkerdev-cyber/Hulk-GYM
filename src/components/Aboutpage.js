import React from 'react'
import GymDisplay1 from '../images/gym-img1.png';
import GymDisplay2 from '../images/gym-img2.png';
import GymDisplay3 from '../images/gym-img3.png';
import GymDisplay4 from '../images/gym-img4.png';
import GymDisplay5 from '../images/gym-img5.jpg';  
import GymDisplay6 from '../images/gym-img6.png';
import GymDisplay7 from '../images/gym-img7.png';
import GymDisplay8 from '../images/gym-img8.png';
import '../CSS/Aboutpage.css';

function Aboutpage() {
  return (
    <>
    
    <h2 className="about">About Us</h2>
      <div className="about-section">
        <div className="para">
        <p>
    At Gym Hulk, we’re more than just a fitness center — we’re a community built on strength, discipline, and motivation. Our mission is to help every member unlock their full potential by combining expert coaching, modern equipment, and a supportive environment that pushes you to go beyond your limits. Whether you’re stepping into the gym for the first time or chasing advanced goals, Gym Hulk is the place where dedication meets transformation, and every workout brings you closer to becoming the strongest version of yourself.
        </p>
        <br/>
        <p>
          Beyond the workouts, Gym Hulk is committed to creating an atmosphere where progress is celebrated and challenges are embraced. We believe fitness is not just about building muscle, but about building character, discipline, and confidence that carry into everyday life. Our trainers and staff are here to guide, motivate, and support you at every step, ensuring that your journey is not only effective but also enjoyable. With a community that thrives on encouragement and shared goals, Gym Hulk is where you’ll find the strength to push harder, go further, and transform both body and mind.
        </p>
        </div>
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={GymDisplay1} className="d-block w-100" alt="Gym Hulk"/>
        </div>
        <div className="carousel-item">
          <img src={GymDisplay2} className="d-block w-100" alt="Gym Hulk"/>
        </div>
        <div className="carousel-item">
          <img src={GymDisplay3} className="d-block w-100" alt="Gym Hulk"/>
        </div>
        <div className="carousel-item">
          <img src={GymDisplay4} className="d-block w-100" alt="Gym Hulk"/>
        </div>
        <div className="carousel-item">
          <img src={GymDisplay5} className="d-block w-100" alt="Gym Hulk"/>
        </div>
        <div className="carousel-item">
          <img src={GymDisplay6} className="d-block w-100" alt="Gym Hulk"/>
        </div>
        <div className="carousel-item">
          <img src={GymDisplay7} className="d-block w-100" alt="Gym Hulk"/>
        </div>
         <div className="carousel-item">
          <img src={GymDisplay8} className="d-block w-100" alt="Gym Hulk"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
      </div>

        <div className="footer">
    <div className="gyminfo">
      <h5>Gym Hulk</h5>
      <p>Your ultimate destination for strength training and fitness excellence. Join us to transform your body and mind!</p>
    </div>
    <div className="gymaddress">
      <h5>Address</h5>
      <p>Hulk Fitness St.<br />Muscle City, Fitland 45678<br />Phone: (123) 456-7890<br />Email: info@gymhulk.com</p>
    </div>
 
  <div className="gymcontact">
    <h5>Contact Us</h5>
    <i className="fa-solid fa-phone"></i> <span>(123) 456-7890</span><br />
    <i className="fa-solid fa-envelope"></i> <span>info@gymhulk.com</span><br />
    <div className="wrap">    
      <i className="fa-brands fa-facebook"></i> <span>/GymHulk</span><br />
    <i className="fa-brands fa-twitter"></i> <span>@GymHulk</span><br />
    <i className="fa-brands fa-instagram"></i> <span>@GymHulk</span><br /></div>
  </div>

   </div>

  <p className='right'>© 2026 Gym Hulk. All rights reserved.</p>

    </>
  )
}

export default Aboutpage