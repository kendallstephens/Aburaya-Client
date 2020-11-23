import React, {Component} from 'react';
import NavBar from './Container/NavBar'
import Header from './Header'
import Home from './Home'
import MainContainer from './Container/MainContainer'
import NotFound from './Components/NotFound'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'


class App extends Component {
  
  state = {
    user: [],
    token: '',
    setUser: {}
    
  }

   handleHome = () => <Home user = {this.state.user}/>
   renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <LoginForm name="Login Form" handleSubmit={this.handleLogin} />
    } else if (routerProps.location.pathname === "/signup"){
      return <SignupForm name="Signup Form" handleSubmit={this.handleSignup} />
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
     console.log(info)
     fetch(request, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         "Accept": "application/json"
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
       this.setState({
         user: info.email, token: data.token, setUser: info
        }, () =>{
        this.props.history.push('/')     
       })
       localStorage.setItem('User', info)
      })
   }

  render () {
    const {renderForm, handleHome} = this
  return (
    <div className = 'App'>
     <ul>
     <Switch>
        <Route path = '/' exact component = {handleHome}/>
        <Route path= '/login' exact component = {renderForm} />
        <Route path = "/signup" exact component = {renderForm} />
        <Route component = {NotFound} />
     </Switch>
        <Header />
        <MainContainer />
        <NavBar />
    
        </ul>
    </div>
  );
  }
}

export default withRouter(App);
