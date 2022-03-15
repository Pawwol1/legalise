import React from 'react';
import Review from './review';
import Navbar from "./navbar";
import Language from "./language";
import Darkmode from "./darkmode";
import OfferBox from "./offer";
import Home from "./home"
import Mission from "./mission";

function App() {
  return (
      <>
      <header >
          <Navbar/>
          <Language/>
          <Darkmode/>
      </header>
      <main>
          <Home id="home"/>
          <Mission/>
          <OfferBox/>
          <Review />
      </main>
      </>
  );
}

export default App;
