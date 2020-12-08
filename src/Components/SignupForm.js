import React from 'react'
import {Form, Button, Grid, Segment} from 'semantic-ui-react'




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
  <div>
      <Grid textAlign = 'center' verticalAlign  = 'middle'>
      <Grid.Column style={{maxWidth: 450}}>
      
      <Form className='signup-form' onSubmit={handleSubmit} size='medium'>
          <Segment stacked>
      <h3>Signup</h3>
      <Form.Input  fluid placeholder='First Name' type='text' name='first_name' value={first_name} onChange={handleChange}/><br />
      <Form.Input  fluid placeholder='Last Name' type='text' name='last_name' value={last_name} onChange={handleChange}/><br />
      <Form.Input  fluid placeholder='Phone Number' type='text' name='phone_number' value={phone_number} onChange={handleChange}/><br />
      <Form.Input  fluid placeholder='E-mail address' type='text' name='email' value={email} onChange={handleChange}/><br />
      <Form.Input  fluid placeholder='Password' type='password' name='password' value={password} onChange={handleChange}/><br />
      <Button color='black' fluid size='large'>Sign Up</Button>
      </Segment>
       </Form>
       </Grid.Column>
       </Grid>
       
    </div>
      )
  }
}

export default SignupForm;
