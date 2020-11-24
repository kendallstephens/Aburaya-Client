import React, {Component} from 'react';
import NavBar from './Container/NavBar'
import Header from './Header'
import Home from './Home'
import MainContainer from './Container/MainContainer'
import NotFound from './Components/NotFound'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import MapContainer from './Container/MapContainer'
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'

const profileURL = 'http://localhost:3000/profile'


class App extends Component {
  
  state = {
    user: {},
    token: '', 
    cart: []  
  }

   handleHome = () => <Home user = {this.state.user}/>
   renderForm = (routerProps) => {
    if (routerProps.location.pathname === "/login"){
      return <LoginForm name="Login Form" handleSubmit={this.handleLogin} />
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
        // this.setState({user: user.data})
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
        }, () =>{
        this.props.history.push('/')     
       }) 
      })
   }

   handleLogout = (user) => {
    localStorage.removeItem('token')
    return <Redirect to="/" push={true} />
  }


   addToCart = (item) => {
     this.setState(prevState => {
       return {cart: [...prevState.cart, item]}
     })
   }

  render () {
    const {user, cart} = this.state
    const {renderForm, handleHome, handleLogout, addToCart} = this
  return (
    <div className = 'App'>
     <ul>
     <Switch>
        <Route exact path = '/' component = {handleHome}/>
        <Route exact path = '/login' component = {renderForm} />
        <Route exact path = '/logout' component={() =>handleLogout()} />
        <Route exact path = "/signup" component = {renderForm} />
        <Route component = {NotFound} />
     </Switch>
        <Header />
        <MainContainer addToCart = {addToCart} cart = {cart}/>
        <NavBar />
        <MapContainer />
    
        </ul>
    </div>
  );
  }
}

export default withRouter(App);
