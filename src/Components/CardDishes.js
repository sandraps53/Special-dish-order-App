import React from 'react'

function CardDishes(props) {
   
  
  

  return (
   
       <li>
          <a href="javaScript:;" onClick={()=>{
            props.showPopup(props.menuItem.strMeal)
          }}>
          <img src={props.menuItem.strMealThumb} className="br-10" />
          <h5>{props.menuItem.strMeal}</h5>
          </a>
        </li>
   
  )
}

export default CardDishes
