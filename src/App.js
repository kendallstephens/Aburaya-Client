import React, {Component} from 'react';
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Logout from './Components/Logout'
import MainContainer from './Container/MainContainer'
import NotFound from './Components/NotFound'
import LoginForm from './Components/LoginForm'
import SignupForm from './Components/SignupForm'
import MapContainer from './Container/MapContainer'
import CartContainer from './Container/CartContainer'
import StripeLayout from './Container/StripeLayout'
import './App.css';
import {BrowserRouter as Router, Route, Switch, withRouter, NavLink, Redirect} from 'react-router-dom'
import {Button, Icon, Container, Menu} from 'semantic-ui-react'
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';





const profileURL = 'http://localhost:3000/profile'
// const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);


class App extends Component {
  
  state = {
    user: {},
    user_id: localStorage.user_id,
    loggedIn: false,
    token: localStorage.token,
    order: {},
    currentCart: [],
  }
  
  //  handleHome = () => <Home user = {this.state.user}/>
   renderForm = (routerProps) => {
     const {loggedIn} = this.state
     
    if (routerProps.location.pathname === "/login" && loggedIn === false){
      return <LoginForm name="Login Form" handleSubmit={this.handleLogin} user = {this.state.user}/>
    } else if (routerProps.location.pathname === "/login" && loggedIn === true){
     return <Home user = {this.state.user}/>
    } else if (routerProps.location.pathname === "/signup"){
    return <SignupForm name="Signup Form" handleSubmit={this.handleSignup} />
  }

  }


  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      fetch((profileURL), {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data,
          order: data.orders,
          currentCart: data.order_items,
          orderItems: data.order_items,
          loggedIn: true
        })
      })
    }
  }
 
   handleLogin = (info) => {
     console.log(info)
     this.handleAuthFetch(info, 'http://localhost:3000/login')
   }

   handleSignup = (info) => {
     console.log('sign up')
     this.handleAuthFetch(info, 'http://localhost:3000/users' )
   }


   handleAuthFetch = (info, request) => {
     fetch(request, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'application/json'
       },
       body: JSON.stringify({
         first_name: info.first_name,
         last_name: info.last_name,
         phone_number: info.phone_number,
         email: info.email,
         password: info.password
       })
     })
     .then(res => res.json())
     .then(data => {
       console.log(data)
       localStorage.setItem('token', data.token)
       localStorage.setItem('user_id', data.user.id)
       this.setState({
        user: data.user,
        loggedIn: true
        }) 
      })
   }

   handleLogout = (user) => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('order_id')
    this.setState({
      user: {},
      loggedIn: false,
      orderItems: {},
      currentCart: [],
      order: {},
      token: null,
      user_id: null

    })
    return <Redirect to="/" push={true} />
  }

  // updateCart = (data) => {
  //   this.setState({
  //     currentCart: data
  //   })
  //  }


    addToCart = async (item) => {
      const {currentCart, order} = this.state
      
      console.log(currentCart)
      if (currentCart.length > 0)
       fetch('http://localhost:3000/order_items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
            order_id: order,
            item_id: item.id,
            quantity: 1
           })
          })
           .then(res => res.json())
           .then(data => {
            //  console.log(data)
             this.setState(prevState => {
              return {
                currentCart: [...prevState.currentCart, data]
              }
            })
           })
         else 
         await fetch('http://localhost:3000/orders',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
              complete: false,
              user_id: this.state.user_id
           })
          })
           .then(res => res.json())
           .then(data => {
             console.log(data)
             this.createOrderItem(data, item)
           
           })
           
          // fetch('http://localhost:3000/order_items',{
          // method: 'POST',
          // headers: {
          //   'Content-Type': 'application/json'
          // },
          //   body: JSON.stringify({
          //     order_id: order,
          //     item_id: item.id,
          //     quantity: 1
          //  })
          // })
          //  .then(res => res.json())
          //  .then(data => {
          //    console.log(data)
            //  this.updateCart(data)
      
            //  this.setState({
            //    currentCart: data
              
            //   }) 
          //  })
      }

      createOrderItem = (data, item) => {
        console.log(data.orders)
        fetch('http://localhost:3000/order_items',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
              order_id: data.id,
              item_id: item.id,
              quantity: 1
           })
          })
           .then(res => res.json())
           .then(data => {
             console.log(data)
            //  this.updateCart(data)
      
             this.setState({
               currentCart: data
              
              }) 
           })

      } 

      // updateCart = (data) => {
      //   this.setState({
      //     currentCart: data
      //   })
      //  }

      deleteOrderItem = (item) => {
        const remove = this.state.currentCart.find(currentCart => currentCart.id === item.id)
       fetch(`http://localhost:3000/order_items/${item}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState(prevState => {
            return {
              currentCart: prevState.currentCart.filter(currentCart => currentCart.id !== data.id)
            }
          })
        })
      }
  

  render () {
    const {user, order_id, cart, currentCart, loggedIn} = this.state
    const {renderForm, handleLogout, addToCart, deleteOrderItem} = this
  return (
    <div className = 'App'>
   
      <Router>
      <Header loggedIn = {loggedIn} user = {user}/>
       
        
        <div>
     <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/menu' component={() => <MainContainer cart = {cart} addToCart = {addToCart} />} />
        <Route exact path = '/login' component = {renderForm} />
        <Route exact path = '/logout' component={() =>handleLogout()} />
        <Route exact path = "/signup" component = {renderForm} />
        <Route exact path = "/cart" component = {() => <CartContainer cart = {cart} user = {user} order_id = {order_id} currentCart = {currentCart} deleteOrderItem = {deleteOrderItem}/>}/>
        <Route exact path = '/payment' component = {StripeLayout}/>
        <Route component = {NotFound} />
     </Switch>
     </div>
        <Footer />
        <MapContainer />
        </Router>
       
        
    
      
    </div>
  );
  }
}

export default withRouter(App);
