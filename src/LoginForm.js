import React from 'react'
import {Form, Grid, Button, Message, Segment} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'


class LoginForm extends React.Component {

  state = {
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
  const {email, password} = this.state
  const {handleSubmit, handleChange} = this
return (

  <div>
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{maxWidth: 450}}>
      
        <Form className = 'login-form' onSubmit={handleSubmit} size = 'medium'>
        <h3>Login</h3>
          <Segment stacked>
        <Form.Input  fluid icon='user' iconPosition='left' type='text' name='email' placeholder='E-mail address' value={email} onChange={handleChange}/><br />
        <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' placeholder='Password' value={password} onChange={handleChange}/><br />
        <Button color='black' fluid size='large'>Login</Button>  
          </Segment>
       </Form>
       <Message>
        First time here? <NavLink to = '/signup'>Sign Up</NavLink>
      </Message>
      </Grid.Column>
    </Grid>
  </div>
      )
  }
}

export default LoginForm;
