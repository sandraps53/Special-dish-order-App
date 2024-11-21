import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";

import Header from "./Header";
import {AllMenus} from "./AllMenuContext";
import Checkout from "./Checkout";
import { AppProvider } from "../Context/AppProvider";


function Menus() {
  
  
 

  return (
    <div>
      <Router>
        <AppProvider>
      <Header />
      <Hero />
      <Routes>
        {/* page 1 */}
        <Route 
          path="/"  element={  
              <AllMenus >
                <SpecialDishes />
                <FilteredDishes />
              </AllMenus >} 
        
        />
        <Route 
          path="/Special-dish-order-App

"  element={  
              <AllMenus >
                <SpecialDishes />
                <FilteredDishes />
              </AllMenus >} 
        
        />
        {/* page 2 */}
        <Route path="/checkout" element={<Checkout />} />
       
        </Routes>
        </AppProvider>
        
       </Router>
     
    </div>
  );
}
export default Menus;
