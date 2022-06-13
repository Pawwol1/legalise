import React from 'react';
import Review from './components/review/review';
import Navbar from "./components/navbar/navbar";
import Language from "./language";
import Darkmode from "./darkmode";
import OfferBox from "./components/offer/offer";
import Home from "./components/home/home"
import Mission from "./components/mission/mission";
import Contact from "./components/contact/contact";
import PriceList from "./components/price_list/price_list";

function App() {
  return (
      <>
      <header >
          <Navbar/>
          <div className="contain">
              <Darkmode/>
              <Language/>
          </div>
      </header>
      <main>
          <Home/>
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
