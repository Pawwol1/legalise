import React from 'react';
import Review from './review';
import Navbar from "./navbar";
import Language from "./language";
import Darkmode from "./darkmode";
import OfferBox from "./offer";
import Home from "./home"
import Mission from "./mission";
import Contact from "./contact";
import PriceList from "./price_list";

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
          <PriceList/>
      </main>
       <footer>
           <Contact/>
       </footer>
      </>
  );
}

export default App;
