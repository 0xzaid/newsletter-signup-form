import { Container1 } from '../styles/global';
import SignUpImg from '../assets/images/illustration-sign-up-desktop.svg';
import React, { useEffect, useState } from "react";
import icons from '../assets/images/icon-list.svg'
import ThankYoucard from './ThankYouCard';


const NewsLetter = () => {

  const [email, setEmail] = useState("");

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [validEmail, setValidEmail] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail)
    // check if email is valid or empty
    setValidEmail(emailRegex.test(inputEmail) || email === "")
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
    if valid email -> send to ty page
    else -> error
    */
    if (validEmail) {
      console.log("Valid email, form submitted")
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


        <div className="info-text">
          <h1>Stay updated!</h1>

          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <ul>
            <li> <img src={icons} alt="" /> Product discovery and building what matters</li>
            <li> <img src={icons} alt="" /> Measuring to ensure updates are a success</li>
            <li> <img src={icons} alt="" /> Add much more!</li>
          </ul>

          <form className="my-form">
            <div className="contact">
              <div className="email-label">
                <label for="email">
                  Email address
                </label>
                {!validEmail && email !== "" && (<p className="warning">Valid email required</p>)}
              </div>

              <input placeholder='email@company.com'
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(handleEmailChange)}
                  className={email !== "" && !validEmail ? "input-error": ""}
              />
              <button
                type="button"
                onClick={handleSubmit}
              >Subscribe to monthly newsletter</button>
            </div>
          </form>
        </div>

        <div class="signup-img">
          <img src={SignUpImg} alt="" />
        </div>



      </Container1>
    </>
  );
}


export default NewsLetter;