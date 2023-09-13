import { GlobalStyle } from "./styles/global";
import React, { useEffect } from 'react';
import NewsLetter from './components/NewsLetter';

function App() {
  useEffect(() => {
    document.title = 'News letter';
  }, []);

  return (
    <>
      <GlobalStyle />
      <NewsLetter />
    </>
  );
}

export default App;
