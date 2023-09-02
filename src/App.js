import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/home';
import AboutScreen from './screens/about';
import DestinationScreen from './screens/destinations';
import HotelScreeen from './screens/hotels';
import ContactScreen from './screens/contact';
import PageNotFoundScreen from './screens/page-not-found';

import "./css/flaticon.css";
import "./css/style.css";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeScreen></HomeScreen>}></Route>
          <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
          <Route path="destinations" element={<DestinationScreen></DestinationScreen>}></Route>
          <Route path="hotels" element={<HotelScreeen></HotelScreeen>}></Route>
          <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>


          <Route path="*" element={<PageNotFoundScreen></PageNotFoundScreen>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;