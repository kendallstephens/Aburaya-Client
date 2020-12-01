import React, {Component} from 'react';
import NavBar from './Container/NavBar'
// import About from './Components/About'
import Home from './Components/Home'
import Header from './Header'
import Footer from './Components/Footer'
import Logout from './Logout'
import MainContainer from './Container/MainContainer'
import NotFound from './Components/NotFound'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import MapContainer from './Container/MapContainer'
import Cart from './Components/Cart'
import './App.css';
import {BrowserRouter as Router, Route, Switch, withRouter, Redirect} from 'react-router-dom'

const profileURL = 'http://localhost:3000/profile'


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
      return <Logout user = {this.state.user}/>
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
          currentCart: data.items,
          loggedIn: true
        })
      })
    }
  }


 
 
   handleLogin = (info) => {
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
       console.log(data.token)
      //  console.log(data.user.id)
       localStorage.setItem('token', data.token)
       localStorage.setItem('user_id', data.user.id)
       this.setState({
          user: data.user,
          loggedIn: true
        }, () =>{
        this.props.history.push('/menu')     
       }) 
      })
   }

   handleLogout = (user) => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('order_id')
    localStorage.removeItem('cart')
    this.setState({
      user: {},
      loggedIn: false
    })
    return <Redirect to="/" push={true} />
  }


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
             console.log(data)
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
            localStorage.setItem('order_id', data.id)
             console.log(data)
           })
           
          await fetch('http://localhost:3000/order_items',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
              order_id: localStorage.getItem('order_id'),
              item_id: item.id,
              quantity: 1
           })
          })
           .then(res => res.json())
           .then(data => {
             console.log(data)
           })
      }
  

  render () {
    const {user, order_id, cart, currentCart} = this.state
    const {renderForm, handleLogout, addToCart} = this
  return (
    <div className = 'App'>
      <Router>
        <Header />
        <div>
     <Switch>
        {/* <Route exact path = '/' component = {Home}/> */}
        <Route exact path = '/' component = {() => <Home />}/>
        <Route exact path = '/menu' component={() => <MainContainer cart = {cart} addToCart = {addToCart} />} />
        <Route exact path = '/login' component = {renderForm} />
        <Route exact path = '/logout' component={() =>handleLogout()} />
        <Route exact path = "/signup" component = {renderForm} />
        <Route exact path = "/cart" component = {() => <Cart cart = {cart} user = {user} order_id = {order_id} currentCart = {currentCart}/>}/>
        <Route component = {NotFound} />
     </Switch>
     </div>
        <NavBar />
        {/* <About  /> */}
        <Footer />
        <MapContainer />
        </Router>
    
      
    </div>
  );
  }
}

export default withRouter(App);
