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
import './App.css';
import {BrowserRouter as Router,Route, Switch, withRouter, Redirect} from 'react-router-dom'

const profileURL = 'http://localhost:3000/profile'


class App extends Component {
  
  state = {
    user: {},
    loggedIn: false,
    loggedInUserId: localStorage.userId,
    token: localStorage.token,
    cart: [],
    initializedCart: {}
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
        console.log(data)
        this.setState({
          user: data,
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
     console.log(request)
     fetch(request, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         "Authorization": "application/json"
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
       localStorage.setItem('token', data.token)
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
    this.setState({
      user: {},
      loggedIn: false
    })
    return <Redirect to="/" push={true} />
  }


   addToCart = (item) => {
     this.setState(prevState => {
       return {cart: [...prevState.cart, item]}
     })
   }

  getOrder = (order) => {
    this.setState({
      initializedCart: order
    })
  }

   addToCart = (item) => {
    console.log(item.id)
    this.setState({
      cart: [...this.state.cart, item]
    })
    fetch("http://localhost:3000/order_items", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        item_id: item.id,
        order_id: this.state.initializedCart.id
      })
    }).then(response => response.json())
    .then(data => {
      fetch("http://localhost:3000/orders/" + this.state.initializedCart.id).then(response => response.json())
      .then(data => {
        this.getOrder(data)
      })
    })
  }

  render () {
    const {cart} = this.state
    const {renderForm, handleLogout, addToCart} = this
  return (
    <div className = 'App'>
      <Router>
        <Header />
        <div>
     <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/menu' component={() => <MainContainer cart = {cart} addToCart = {addToCart} />} />
        <Route exact path = '/login' component = {renderForm} />
        <Route exact path = '/logout' component={() =>handleLogout()} />
        <Route exact path = "/signup" component = {renderForm} />
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
