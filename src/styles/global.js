import { createGlobalStyle } from "styled-components";
import styled from "styled-components";



export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  :root {
    /* Colors */
    --tomato: hsl(4, 100%, 67%);
    --dark-slate-grey: hsl(234, 29%, 20%);
    --charcoal-grey: hsl(235, 18%, 26%);
    --grey: hsl(231, 7%, 60%);
    --white: hsl(0, 0%, 100%);

    /* Typography */
    --font-size-paragraph: 16px;

    /* Font */
    --font-family: 'Roboto', sans-serif;
    --font-weight-regular: 400;
    --font-weight-bold: 700;
  }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

  html,
  body {
    background-color: var(--charcoal-grey);
    font-family: var(--font-family);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -ms-flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .info-text {
    font-weight: 700;
    min-width: 50%;
    padding: 1.5rem;
  }

  .info-text h1 {
    font-weight: 700;
    font-size: 50px;

  }

  .info-text p {
    margin: 20px 0px 0px 0;
    font-size: 13px;
    color: var(--charcoal-grey)
  }

  .info-text ul {
    margin: 20px 0px 20px 0;
    padding: 0;
    display: inline-block;
    max-width: 350px;
    font-size: 13px;
    list-style-type: none;
  }

  .info-text li {
    clear: left;
    padding: .2rem 0;
    display: flex;
    gap: 0.75rem;
    font-weight: var(--font-weight-regular)
  }

  .info-text li div {
    margin-top: 3px;
  }

  .signup-img img {
    width: 100%;
    padding: 1.25rem;
    margin-left: 1.5rem;
  }

  form {
    max-width: 320px;
    display: flex;
  }

  .contact label {
    font-size: 11px;
    margin-top: 20px;
  }

  .contact {
    flex: 1; 
    margin-top: -10px;
  }

  .contact input {
    width: 100%;

  }
  .input-error {
    border: 1px solid var(--tomato);
    color: var(--tomato);
    background-color: rgba(255, 99, 71, 0.1);
  }

  .contact input {
    padding: 1em;
    margin-bottom: 1em;
    margin-top: 0.5em;
    border-radius: 7px;
    border: 1px solid var(--grey);
  }


  ${'' /* Thx card */}


  .header {
    font-size: 50px;
    line-height: 45px;
    margin: 30px 0px 30px 0px;
  }

  .confirmation-text {
    margin: 0px 0px 50px 0px;
  }

  .confirmation-email {
    font-weight: 700;
  }

  .email-label {
    display: flex;
    justify-content: space-between;
  }

  .email-label .warning {
    color: var(--tomato);
    font-size: 11px;
    font-weight: bold;
  }

  .mobile-image {
  display: none; /* Initially hide for larger screens */
}

  ${'' /* Mobile */}

  @media only screen and (max-width: 950px) {
    html, body {
      background-color: var(--white);
      height: 100%;
    }

    .info-text{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .info-text>h1{
      font-size: 2rem;
      width: 100%;
    }

    .info-text>ul{
      width: 100%
    }

    .info-text>ul{
      width: 100%;
    }

    .desktop-image {
      display: none;
    }

    .mobile-image {
      display: block;
      border-radius: 1.5rem;
    }

    .header {
      width: 100%;
      font-size: 40px;
    }

    .confirmation-text {
      padding-bottom: 10rem;
    }
  }

`;

export const Container1 = styled.div`
  background-color: var(--white);
  border-radius: 1.5rem;
  padding: 14px 24px 12px 18px;
  width: 100%;
  max-width: 850px;
  height: 65%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
  align-items: center;

  @media only screen and (max-width: 950px) {
    left: 0;
    top: 0;
    padding: 0.25rem;
    transform: translate(0%, 0%);
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Container2 = styled.div`
  background-color: var(--white);
  border-radius: 1.5rem;
  padding: 40px 40px 40px 40px;
  width: 100%;
  max-width: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  @media only screen and (max-width: 950px) {
    padding: 1.5rem;
  }


`;

export const Button = styled.div`
  width: 100%;
  padding: 1em;
  border: 0;
  margin-bottom: 1em;
  margin-top: 0.5em;
  color: var(--white);
  background-color: var(--dark-slate-grey);
  border-radius: 7px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
`