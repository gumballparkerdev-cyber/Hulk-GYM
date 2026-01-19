import React, { useEffect } from 'react';
import '../CSS/Homepage.css';
// Importing images
import GymImage from '../images/Gym.png';
import GymDisplay1 from '../images/gym-img1.png';
import GymDisplay2 from '../images/gym-img2.png';
import GymDisplay3 from '../images/gym-img3.png';
import GymDisplay4 from '../images/gym-img4.png';
import GymDisplay5 from '../images/gym-img5.jpg';  
import GymDisplay6 from '../images/gym-img6.png';
import GymDisplay7 from '../images/gym-img7.png';
import GymDisplay8 from '../images/gym-img8.png';
import GymImage2 from '../images/Gym-mb.png';
import { Link , useNavigate } from 'react-router-dom';


function Homepage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // stops observing once animated
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
     <div className="container">
  <img src={GymImage} alt="Gym" className="homepage-image desktop-img" />
  <img src={GymImage2} alt="Gym Mobile" className="homepage-image mobile-img" />
  <button className="apply" onClick={() => navigate("membership")}>Apply Membership</button>
  <h2 className="reason">Reasons To Join Our Gym!!</h2>
</div>


      <div className="container-1">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Build Strength Fast 🏋️</h5>
                <p className="card-text">
                  Proven training programs designed to maximize muscle growth and power.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Expert Trainers 🎯</h5>
                <p className="card-text">
                  Certified coaches who guide you step‑by‑step to crush your fitness goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Modern Equipment ⚡</h5>
                <p className="card-text">
                  State-of-the-art machines and tools for safe and effective workouts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Community & Motivation 🤝</h5>
                <p className="card-text">
                  Train with like‑minded people, stay motivated, and never give up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

<h2 className='member'>GYM Membership.</h2>

<div className="card-flex">
<div className="card border-primary noob">
  <div className="card-body text-primary">
    <h5 className="card-title">$29/month</h5>
   <ul>
    <li>Access to all gym equipment</li>
    <li>Free fitness assessment once a month</li>
    <li>2 group classes per week</li>
    <li>Access to locker rooms and showers</li>
   </ul>
  </div>
    <Link id='buy' to="/buy"><button className="btn btn-primary buy">Buy Now</button></Link>
</div>

<div className="card border-primary noob">
  <div className="card-body text-primary">
    <h5 className="card-title">$59/month</h5>
   <ul>
    <li>Everything in Basic Hulk</li>
    <li>Unlimited group classes (HIIT, yoga, strength training)</li>
    <li>2 personal training sessions per month</li>
    <li>Nutrition guidance from certified coaches</li>
    <li>Access to locker rooms and showers</li>
   </ul>
  </div>
    <Link id='buy' to="/buy"><button className="btn btn-primary buy">Buy Now</button></Link>
</div>


<div className="card border-primary noob">
  <div className="card-body text-primary">
    <h5 className="card-title">$99/month</h5>
   <ul>
    <li>Everything in Pro Hulk</li>
    <li>Unlimited personal training sessions</li>
    <li>Priority booking for equipment & classes</li>
    <li>Nutrition guidance from certified coaches</li>
    <li>Exclusive access to recovery zone (sauna, massage chairs)</li>
    <li>Free Gym Hulk merchandise (shirt, shaker bottle)</li>
    <li>Access to locker rooms and showers</li>
   </ul>
  </div>
  <Link id='buy' to="/buy"><button className="btn btn-primary buy">Buy Now</button></Link>
</div>

</div>


  <h2 className="about">About Us</h2>
  <div className="about-section">
    <div className="para">
    <p>
At Gym Hulk, we’re more than just a fitness center — we’re a community built on strength, discipline, and motivation. Our mission is to help every member unlock their full potential by combining expert coaching, modern equipment, and a supportive environment that pushes you to go beyond your limits. Whether you’re stepping into the gym for the first time or chasing advanced goals, Gym Hulk is the place where dedication meets transformation, and every workout brings you closer to becoming the strongest version of yourself.
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
  );
}

export default Homepage;