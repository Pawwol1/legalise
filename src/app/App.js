import React from 'react';
import Review from './review';
import Navbar from "./navbar";
import Language from "./language";
import Darkmode from "./darkmode";
import OfferBox from "./offer";

function App() {
  return (
      <>
      <header id="home">
          <Navbar/>
          <Language/>
          <Darkmode/>
      </header>
      <main>
          <OfferBox/>
          <Review />
      </main>
      </>
  );
}

export default App;
