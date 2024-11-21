import { useContext } from "react"
import { StateContext } from "../Context/AppProvider"
const AddToCart = ({addToCartItem})=> {

    const cartPackage = useContext(StateContext)
    
   
    let addToCartResults = addToCartItem.map((item)=>{
        return (
            <div>
                <img src={item.img}  />
                <h6>{item.title}</h6>
            </div>
        )
    })

    return (
       <div className="add-to-cart-wrapper">
        <div className="add-to-cart-item">
            <h6 className="text-center">Your Cart</h6>
            {/* {addToCartResults.length > 0 ? (addToCartResults) : ( <h6 className="text-center">Is empty</h6>) } */}
            <img src={cartPackage.cartItems[0]}/>
            <h6>{cartPackage.cartItems[1]}</h6>
        </div>
       </div>
    )
}

export default AddToCart