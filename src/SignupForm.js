import React from 'react'
// import {Link} from 'react-router-dom'


class SignupForm extends React.Component {

  state = {
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      password: ''
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
      this.props.handleSubmit(this.state)
    }
  
    handleChange = (e) => {
      let {name, value} = e.target
      this.setState({
        [name]: value
      })
    }

render(){
    const {first_name, last_name, password, phone_number, email} = this.state
    const {name} = this.props
    const {handleSubmit, handleChange} = this
return (
  

      
      <form onSubmit={handleSubmit}>
      <h1>{name}</h1>
      <label htmlFor="first_name">First Name:</label>
      <input type="text" name="first_name" value={first_name} onChange={handleChange}/>
      <label htmlFor="last_name">Last Name:</label>
      <input type="text" name="last_name" value={last_name} onChange={handleChange}/>
      <label htmlFor="phone_number">Phone Number:</label>
      <input type="text" name="phone_number" value={phone_number} onChange={handleChange}/>
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" value={email} onChange={handleChange}/>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" value={password} onChange={handleChange}/>
      <input type="submit" value="Submit"/>
       </form>
      )
  }
}

export default SignupForm;
