import React, {Component} from "react";
import { Form, Card } from "semantic-ui-react";
// import { useMutation } from "@apollo/react-hooks";
import { Avatar } from "theme-ui";
import About from "../../components/About";
import Submit from "../../components/Submit";
import Navbar from "../../components/Navbar";
import image from "../../assets/images/pd.png";
import "../style.css";
// import Auth from "../../utils/auth";

class Login extends Component {
constructor(props) {
   // Defined Props Will Be Logged 
  super(props);
  this.state = {
    name: this.name,
    email: this.email,
    password: this.password,
    confirm: this.comfirm,
    isSaved: false
  }

  this.onChangeName = this.onChangeName(this);
  this.onChangeEmail = this.onChangeEmail(this);
  this.onChangePassword = this.onChangePassword(this);
  this.onChangeConfirm = this.onChangeConfirm(this);
  this.onSubmit = this.onSubmit(this);

  this.state = {
    name: '',
    email: '',
    password: '',
    confirm: ''
  }
}

onChangeName(e){
  this.setState({name:e.target.value})
}

onChangeEmail(e){
  this.setState({email:e.target.value})
}

onChangePassword(e){
  this.setState({password:e.target.value})
}

onChangeConfirm(e){
  this.setState({confirm:e.target.value})
}

onSubmit(e) {
  e.preventDefault()
}
//react life cycle
mount() {
  this.userData = JSON.parse(localStorage.getItem('user'))

  if (localStorage.getItem('user')) {
    this.setState ({
      name: this.userData.name,
    email: this.userData.email,
    password: this.userData.password,
    confirm: this.userData.comfirm
    })
  }
}

render(){
  return (

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
          <p className="p2">Fill out this form to create an account</p>
          <Form
            className="form"
            onSubmit={this.onSubmit}
          >
            <Form.Field className="field">
              <label className="label">Your Name</label>
              <input
                className="input"
                placeholder="Full Name"
                  value={this.state.name}
                required
                onChange={this.onChangeName}
              
              />
            </Form.Field>
            <Form.Field className="field">
              <label className="label">Your Email</label>
              <input
                className="input"
                placeholder="Email Address"
                value={this.state.email}
                required
                onChange={this.onChangeEmail}

              />
            </Form.Field>
            <Form.Field className="field">
              <label className="label">Password</label>
              <input
                className="input"
                placeholder="Create Password"
                value={this.state.password}
                required
                onChange={this.onChangePassword}
              />

            </Form.Field>
            <Form.Field className="field">
              <label className="label">Re-enter Password</label>
              <input
                className="input"
                placeholder="Confirm Password"
                value={this.state.confirm}
                required
                onChange={this.onChangeConfirm}
              
              />
            </Form.Field>
            <Submit
              // disabled={
              //   !(
              //     userFormData.username &&
              //     userFormData.email &&
              //     userFormData.password
              //   )
              // }
              type="submit"
              variant="success"
            >
              Create Account
            </Submit>
          </Form>
        </Card>
      </Card>
  );
}
}
export default Login;