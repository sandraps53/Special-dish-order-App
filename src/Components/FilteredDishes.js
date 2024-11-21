import React,{useContext, useState,useEffect} from 'react';
import Pagination from './Pagination';
import CardDishes from './CardDishes';
import {AllMenuContext} from './AllMenuContext';




  function FilteredDishes(props) {
    let [menuCategory, setMenuCategory] = useState([]);
  
    let [singleDish, setSingleDish] =  useState([]);
    let allMenus = useContext(AllMenuContext)
    
    
    let [filteredDishes, setfilteredDishes] =useState([])
    let[activeDish, setActiveDish] = useState("Beef")
    let[currentPage, setCurrentPage] = useState(1)
    let [itemsPerPage, setItemsPerPage] = useState(4)

    let indexOfLastDish = currentPage * itemsPerPage;
    let indexOfFirstDish = indexOfLastDish - itemsPerPage;

    let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish,indexOfLastDish)
  
   
    async function getAllTheCategories() {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
      let response = await fetch(API_URL);
      let categoryData = await response.json();
      setMenuCategory(categoryData.categories);
    }
    async function getOnlyOneDish() {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
      let response = await fetch(API_URL);
      let singleDishData = await response.json();
      setSingleDish(singleDishData.meals);
    }
  
    useEffect(() => {
      
      getAllTheCategories();
      getOnlyOneDish();
    }, []);
  



   

    // Lets show only single dishes
    let maxItem = 8;
    let singleDishItems = singleDish.map((item,index)=>{
      if(index < maxItem){
        return(
          <li>
          <img src={item.strMealThumb} alt='mealImg' />
          <h5>{item.strMeal}</h5>
        </li>
        )
      }
       
    })

    // Show Dishes on click
    function showFilteredDishesHandler(category){
      setSingleDish([])
      setActiveDish(category)
       let filteredDishesAre = allMenus.filter((item)=> {
           return(
            item.strCategory === category
           )
       }).map((menuItem)=>{
        return (
         <CardDishes menuItem={menuItem} />
        )
       })
       setfilteredDishes(filteredDishesAre)
    }

    
    // Lets show all categories
    let allCategories = menuCategory.map((item)=>{
        return (
            <li className={item.strCategory === activeDish ? "active": ""} onClick={()=>{
              showFilteredDishesHandler(item.strCategory)
            }}>{item.strCategory}</li>
        )
        
        
    })

  return (
    <div className='filtered-dishes'>
      <div className='container'>
        <div className='text-center'>
          <h2>Choose your dishes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus quis velit cum neque in deleniti aperiam, rerum eos magnam.</p>
        </div>
        <div className='filtered-dishes'>
          <ul>{allCategories}</ul>
        </div>
        <div className='filtered-dishes-results'>
          <ul className='flex flex-wrap gap-30'>
            {singleDishItems}
            {filteredDishes.length!== 0  || singleDishItems.length!==0 ? showTheseDishesNow  : 
            
               <div className='alert'>
              <h3>Sorry, No items found.</h3>
              <h4>Please choose another menu</h4>
              </div>
           
           }
          </ul>
        </div>
       <Pagination  filteredDishes={filteredDishes} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        {/* <Pagination filteredDishes={filteredDishes}></Pagination> */}
      </div>
    </div>
  );
}

export default FilteredDishes;
