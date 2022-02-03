import React, {useState} from "react";
import { Form, Card } from "semantic-ui-react";
import { Avatar } from "theme-ui";
import About from "../../components/About";
import Submit from "../../components/Submit";
import Navbar from "../../components/Navbar";
import image from "../../assets/images/pd.png";
import "../style.css";

function Login() {
<<<<<<< HEAD
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
=======
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  return (
    <div className="main">
      <Card className="primary" style={{ height: "100vh", width: "100%" }}>
        <div className="container1">
        <Avatar src={image} />
        <Navbar></Navbar>
        </div>
        <div className="container2">
        <About></About>
        </div>
        <Card className="secondary">
          <p className="p1">Create Your Virtual Vaccine Card Today!</p>
          <p className="p2" >Fill out this form to create an account</p>
          <Form className="form">
            <Form.Field className="field">
              <label className="label">Your Name</label>
              <input className="input" placeholder="Full Name" />
            </Form.Field>
            <Form.Field className="field">
              <label className="label">Your Email</label>
              <input className="input" placeholder="Email Address" />
            </Form.Field>
            <Form.Field className="field">
              <label className="label">Password</label>
              <input className="input" placeholder="Create Password" />
            </Form.Field>
            <Form.Field className="field">
              <label className="label">Re-enter Password</label>
              <input className="input" placeholder="Confirm Password" />
            </Form.Field>
            <Submit>Create Account</Submit>
          </Form>
        </Card>
      </Card>
    </div>
  );
>>>>>>> f1ca88760d96882918d23737baf811e01e0411a2
}
export default Login;
