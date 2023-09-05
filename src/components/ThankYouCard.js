import React from "react"
import { Container2 } from '../styles/global';
import IconSuccessImg from '../assets/images/icon-success.svg';


export default function ThankYoucard() {

  return (
    <Container2>
      <div>
        <img src={IconSuccessImg} alt="Success icon" />
        <h1 className="header">Thanks for subscribing!</h1>
        <p className="confirmation-text">A confimration email has been sent to to 
          <span class="confirmation-email"> test@email</span>. Please open it and click the
          button inside to confirm your subscription</p>
        <button className="dismiss-btn">Dismiss message</button>
      </div>
    </Container2>
  )
}