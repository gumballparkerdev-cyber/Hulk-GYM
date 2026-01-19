import React from 'react'
import '../CSS/Membership.css'
import { Link } from 'react-router-dom'


function Membership() {
  return (
    <>
    
   <h2 className='member'>GYM Membership.</h2>

<div className="card-flex">

  {/* Starter Plan */}
  <div className="card border-primary noob">
    <div className="card-body text-primary">
      <h5 className="card-title">$19/month</h5>
      <ul>
        <li>Access to cardio machines & basic weights</li>
        <li>One free orientation session with a trainer</li>
        <li>Weekday gym access (Mon–Fri)</li>
        <li>Locker & shower facilities included</li>
      </ul>
    </div>
    <Link id='buy' to="/buy"><button className="btn btn-primary buy">Join Starter</button></Link>
  </div>

  {/* Advanced Plan */}
  <div className="card border-primary noob">
    <div className="card-body text-primary">
      <h5 className="card-title">$49/month</h5>
      <ul>
        <li>Unlimited access to all equipment</li>
        <li>Access to all group classes (HIIT, yoga, spin)</li>
        <li>Monthly progress check‑in with a coach</li>
        <li>Nutrition tips & personalized workout plans</li>
        <li>Weekend guest pass for a friend</li>
      </ul>
    </div>
    <Link id='buy' to="/buy"><button className="btn btn-primary buy">Join Advanced</button></Link>
  </div>

  {/* Premium Hulk Plan */}
  <div className="card border-primary noob">
    <div className="card-body text-primary">
      <h5 className="card-title">$89/month</h5>
      <ul>
        <li>Unlimited personal training sessions</li>
        <li>VIP access to private training zones</li>
        <li>Priority booking for equipment & classes</li>
        <li>Advanced body composition & performance analysis</li>
        <li>Unlimited recovery services (sauna, massage chairs, ice baths)</li>
        <li>Exclusive Gym Hulk premium gear pack</li>
        <li>24/7 facility access with priority support</li>
      </ul>
    </div>
    <Link id='buy' to="/buy"><button className="btn btn-primary buy">Join Premium</button></Link>
  </div>

</div>



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

export default Membership;