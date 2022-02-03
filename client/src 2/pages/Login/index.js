import React from 'react'
import { Button, Checkbox, Form, Card, Grid } from 'semantic-ui-react'
import { Avatar } from 'theme-ui'
import About from '../../components/About'
import image from "../../assets/images/pd.png"
import './style.css'

function Login() {
return(
< div className='main'>
 <Card className='primary'>
 <Avatar src={image} />
  <About></About>
  </Card>
  <Grid.Column>
  <Card className='secondary'>
    <Form.Field>
      <label>Your Name</label>
      <input placeholder='Full Name' />
    </Form.Field>
    <Form.Field>
      <label>Your Email</label>
      <input placeholder='Email Address' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Create Password' />
    </Form.Field>
    <Form.Field>
      <label>Re-enter Password</label>
      <input placeholder='Confirm Password' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Create Account</Button>
  </Card>
  </Grid.Column>
  </div>
);
}
export default Login
