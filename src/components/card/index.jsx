import React from 'react';
import avatar from "../assets/avatar.jpg";
import dogImage1 from "../assets/dog-image-1.jpg";
import dogImage2 from "../assets/dog-image-2.jpg";
import dogImage3 from "../assets/dog-image-3.jpg";

export default function Card() {
  return (
    <div className='card-page'>
      <div className="purple-background"></div>
      <div className="mobile-container">
        <div className="mobile-screen">
          <div className="inner-mobile">
            <div className="upper-container">
              <div className="white-containter">r</div>
              <div className="info-container">
                <div className="arrowAndImage">
                  <h4>&#60;</h4>
                  <img src={avatar} alt="profileImage" />
                </div>
                <div className="profileName">
                  <h3>Samuel Green</h3>
                  <p>Available to Walk</p>
                </div>
                <div className="triple-ellipsis"> &#x22EE;</div>
              </div>
            </div>
            <div className="lower-container">
              <div className="chat-container-one">That sounds great. I'd be happy with that.</div>
              <div className='chat-container-two'>Could you send over some pictures of your dog,please?</div>
              <div className="dogImages">
                <img src={dogImage1} alt="dogImageOne" className='dogImageOne' />
                <img src={dogImage2} alt="dogImageTwo" className='dogImageTwo' />
                <img src={dogImage3} alt="dogImageThree" className='dogImageThree' />
              </div>
              <div className='chat-container-three'>Here are a few pictures.She's a happy girl!</div>
              <div className='chat-container-four'>Can you make it?</div>
              <div className="chat-container-five">She looks so happy! The time we discussed works. How long shall I take her out for?</div>
              <div className="walking-minutes"><h4>&#x25EF;</h4> <h4>30 minute walk</h4> <h5>$29</h5></div>
              <div className="walking-hour"><h4>&#x25EF;</h4> <h4>1 hour walk</h4> <h5>$49</h5></div>
              <div className="text-placeholder"> <h6>Type a message..</h6>
                <h4>&#62;</h4></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-container">
        <h1>Simple booking</h1>
        <p>Stay in touch with our dog walkers through the chat interface.This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
      </div>
    </div>
  )
}
