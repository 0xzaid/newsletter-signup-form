import { Container1, Button } from '../styles/global';
import SignUpImgDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import SignUpImgMobile from '../assets/images/illustration-sign-up-mobile.svg';
import React, { useState } from "react";
import icons from '../assets/images/icon-list.svg'
import ThankYoucard from './ThankYouCard';


const NewsLetter = () => {

  const [email, setEmail] = useState("");

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //eslint-disable-line
  const [validEmail, setValidEmail] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (inputEmail === "") {
      // If the input is empty, consider it as invalid
      setValidEmail(false);
    } else {
      // Check if email is valid
      setValidEmail(emailRegex.test(inputEmail));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail) {
      console.log(`Valid email: >${email}<, form submitted`)
      setIsModalOpen(true)
    } else {
      console.log("Invalid")
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail("")
  }

  return isModalOpen ? (
    <ThankYoucard name={email} onCloseModal={handleCloseModal} />) : (
    <>
      <Container1>
        <div class="signup-img">
          <img src={SignUpImgDesktop} alt="Signup" className="desktop-image" />
          <img src={SignUpImgMobile} alt="Signup" className="mobile-image" />
        </div>
        <div className="info-text">
          <h1>Stay updated!</h1>

          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <ul>
            <li> <img src={icons} alt="" /> <div>Product discovery and building what matters</div></li>
            <li> <img src={icons} alt="" /> <div>Measuring to ensure updates are a success</div></li>
            <li> <img src={icons} alt="" /> <div>Add much more!</div></li>
          </ul>

          <form className="my-form">
            <div className="contact">
              <div className="email-label">
                <label for="email">
                  Email address
                </label>
                {!validEmail && email !== "" && (
                  <p className="warning">Please enter a valid email</p>
                )}
              </div>

              <input placeholder='email@company.com'
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(handleEmailChange)}
                className={email !== "" && !validEmail ? "input-error" : ""}
              />
              <Button
                type="button"
                onClick={handleSubmit}
              >Subscribe to monthly newsletter</Button>
            </div>
          </form>
        </div>
      </Container1>
    </>
  );
}


export default NewsLetter;