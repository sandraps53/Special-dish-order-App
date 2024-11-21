import React from 'react'

function Pagination(props) {
  let numberOfPages = [];
  for(let i=1;i<= Math.ceil(props.filteredDishes.length / props.itemsPerPage) ; i++){
    numberOfPages.push(i);
  }
  
  function showNextDishesHandler(event){
    
    let currentPage = parseInt(event.target.id,10);
    props.setCurrentPage(currentPage)
  }

  let pages = numberOfPages.map((pageNumber)=> {
   
    const isActive = pageNumber === props.currentPage ? 'active' : '';

    return (
      <li className={isActive}  id={pageNumber} onClick={showNextDishesHandler}>{pageNumber}</li>
    ) 
  })
  return (
    
      <section>
         <ul className='pagination'>
          {pages}
      </ul>
      </section>
     
    
  )
  
}

export default Pagination
