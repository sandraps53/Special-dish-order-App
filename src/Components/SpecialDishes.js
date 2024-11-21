import React, { useContext, useState } from "react";
import CardDishes from "./CardDishes";
import Popup from "./Popup";

// Step 4
import {AllMenuContext} from "./AllMenuContext";
import AddToCart from "./AddToCarts";

function SpecialDishes(props) {
  let[showPopUp, setShowPopUp] = useState(false);
  let[currentDish, setCurrentDish] = useState('')
  let[addToCartItem, setAddToCartItem] = useState([])
 

  const allMenu = useContext(AllMenuContext)

  

  // Add to cart Handler
  function addToCartHandler(addToCartImg, addToCartTitle){
    setAddToCartItem(
      [
         ...addToCartItem,
       {
         "img":addToCartImg,
         "title":addToCartTitle
       }
      ]
    )
  }
  
 
  let maxSpecialDishes = 8;
   
  // Lets show the popup
  function showPopupHandler(dishName){
    setShowPopUp(true)
    setCurrentDish(dishName)
   
  }

  // Lets close the popup
  function closePopUpHandler(){
    setShowPopUp(false)
  }
  
  // // Return a loading message if `allMenus` is still undefined
  // if (!allMenus) {
  //   return <div>Loading special dishes...</div>;
  // }

  let specialMenus = allMenu.map((menuItem, index) => {

    if(index < maxSpecialDishes){
      return (
         <CardDishes menuItem={menuItem} showPopup={showPopupHandler} />
      
      );
    }
   
  });

  return (
    <section className="special-dishes">
     {showPopUp && <Popup closePopup={closePopUpHandler} currentDish={currentDish} addToCartHandler={addToCartHandler} />}
      <div className="container">
        <AddToCart addToCartItem={addToCartItem} />
        <div className="special-dishes-content text-center">
          <h2>Our special Dishes</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            inventore deserunt, harum modi dolore voluptas pariatur autem
            voluptatibus? consectetur adipisicing elit. Earum inventore
            deserunt, harum modi dolore voluptas pariatur autem voluptatibus?
          </p>
        </div>
        <div className="special-dishes-list gap-25">
            <ul className="flex flex-wrap">{specialMenus}</ul>
            </div>
      </div>
    </section>
  );
}
export default SpecialDishes;
