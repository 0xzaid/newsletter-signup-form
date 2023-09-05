import { GlobalStyle } from "./styles/global";
import NewsLetter from './components/NewsLetter';
import ThankYoucard from "./components/ThankYouCard";
import { useState } from "react";

function App() {

  return (
    <>
      <GlobalStyle />

      {/* <ThankYoucard /> */}

      <NewsLetter />

    </>
  );
}

export default App;
