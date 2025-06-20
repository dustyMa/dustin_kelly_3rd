
import React, { useEffect, useState } from 'react';
import './Letter.css';

// Import your own photos here (or use public images)
import photo1 from './assets/images/IMG_4034.jpg';
import photo2 from './assets/images/IMG_4868.jpg';
import photo3 from './assets/images/IMG_4737.jpg';
import photo4 from './assets/images/IMG_5824.jpg';
import photo5 from './assets/images/IMG_8296.jpg';
import photo6 from './assets/images/IMG_8708.jpg';

import duck from './assets/images/duckChar.png';
import koupen from './assets/images/koupen.png';

function Letter() {
  const [animate, setAnimate] = useState(false);
  const [wiggling, setWiggling] = useState(false); // State for wiggling effect
  const [wiggling2, setWiggling2] = useState(false); // State for wiggling effect
  

 const handleCharacterClick = () => {
    setWiggling(true); // Toggle wiggling animation when character is clicked
    setTimeout(() => {
      setWiggling(false); // Stop wiggling after 2 seconds
    }, 2000); // 2 seconds duration
  };

   const handleCharacterClick2 = () => {
    setWiggling2(true); // Toggle wiggling animation when character is clicked
    setTimeout(() => {
      setWiggling2(false); // Stop wiggling after 2 seconds
    }, 2000); // 2 seconds duration
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`letter-page ${animate ? 'animate-bg' : ''}`}>
      <div className="letter-content">
        <h2 >Happy 3 year Anniversary!
        </h2>
        <p>Hey Kelly,</p>
        <br></br>
        <p>Happy 3rd Anniversary! I can't believe it's been 3 years already! These past 3 years with you have been amazing, and I'm so lucky to have you as my partner.
            <br></br>All those memories with you have been great, and I can't wait to make more with you!
            <br></br>That Japan trip was so fun with you that I'm still thinking about it. 
            <br></br>I NEED ANOTHER TRIP WITH YOU AHHH.
        </p>
        <p> 
            Anyways, cheers to another year together! I'm looking forward to it 🙂
            <br></br>I'll always continue to cherish you Kelly 💗
        </p>
        <br></br>
        <p>From the guy who loves you so much,<br />Dustin</p>
      </div>

      {/* Character at the top of the letter */}
      <div
        className={`character ${wiggling ? 'wiggling' : ''} `} // Add wiggling class when clicked
        onClick={handleCharacterClick} // Trigger wiggling animation
      >
        <img src={duck} alt="Duck" width="400" height="400"/>
      </div>

      {/* Left side images */}
      <div className={`side-photo left ${animate ? 'show-photo' : ''}`} style={{ animationDelay: '1s' }}>
        <img src={photo1} alt="left-side-1" />
      </div>
      <div className={`side-photo left2 ${animate ? 'show-photo' : ''}`} style={{ animationDelay: '1s' }}>
        <img src={photo2} alt="left-side2" />
      </div>
      <div className={`side-photo left3 ${animate ? 'show-photo' : ''}`} style={{ animationDelay: '1s' }}>
        <img src={photo3} alt="left-side3" />
      </div>

      {/* Right side images */}
      <div className={`side-photo right ${animate ? 'show-photo' : ''}`} style={{ animationDelay: '1s' }}>
        <img src={photo4} alt="right-side-1" />
      </div>
      <div className={`side-photo right2 ${animate ? 'show-photo' : ''}`} style={{ animationDelay: '1s' }}>
        <img src={photo5} alt="right-side2" />
      </div>
      <div className={`side-photo right3 ${animate ? 'show-photo' : ''}`} style={{ animationDelay: '1s' }}>
        <img src={photo6} alt="right-side3" />
      </div>

    {/* Character at the bottom of the letter */}
      <div
        className={`characterBot ${wiggling2 ? 'wiggling2' : ''} `} // Add wiggling class when clicked
        onClick={handleCharacterClick2} // Trigger wiggling animation
      >
        <img src={koupen} alt="Koupen" width="400" height="400"/>
      </div>

    </div>
  );
}

export default Letter;