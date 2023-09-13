import React from "react"
import { Container2, Button } from '../styles/global';
import IconSuccessImg from '../assets/images/icon-success.svg';


const ThankYoucard = ({ onCloseModal, name }) => {

  const handleButtonClick = () => {
    onCloseModal();
  }

  return (
    <Container2>
      <div>
        <img src={IconSuccessImg} alt="Success icon" />
        <h1 className="header">Thanks for subscribing!</h1>
        <p className="confirmation-text">A confimration email has been sent to to
          <span class="confirmation-email"> {name}</span>. Please open it and click the
          button inside to confirm your subscription</p>
        <Button
          type="button"
          onClick={handleButtonClick}
        >
          Dismiss message</Button>
      </div>
    </Container2>
  )
}

export default ThankYoucard;