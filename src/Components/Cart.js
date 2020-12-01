import React from 'react'
import CartItem from './CartItem'

export default function Cart({currentCart, items}){
    // const {orders} = user
 

    // renderCart = (user, order_id) => {
        console.log(currentCart)
       
        
    //    if (order_id === user.orders.id){
    //      return <LoginForm name="Login Form" handleSubmit={this.handleLogin} user = {this.state.user}/>
    //    } else if (routerProps.location.pathname === "/login" && loggedIn === true){
    //      return <Logout user = {this.state.user}/>
    //    } else if (routerProps.location.pathname === "/signup"){
    //    return <SignupForm name="Signup Form" handleSubmit={this.handleSignup} />
    //  }
    //  }
   
    return(
        <div className = 'cart'>
            <h3>Your Order</h3>
        
          

                <div>
         
                  
                                {currentCart.map((item) =>(
                                    <CartItem
                                    key = {item.id} 
                                    item = {item}

                                    />
                                   ))} 
                        
                    
                        
                        </div>
      
                <div> Add something to your cart! </div>
             

        </div>
    )
}