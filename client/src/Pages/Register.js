import React, { useContext, useState } from "react"
import { useHistory } from "react-router";
import { Button, Form } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const history = useHistory();
  const[email, setEmail] = useState("kelsey@gmail.com");
  const[name, setName] = useState("Kelsey Nicholes");
  const[password, setPassword] = useState("123456");
  const[passwordConfirmation, setPasswordConfirmation] = useState("123456");
  const { handleRegister } = useContext(AuthContext)

  const handleSubmit = (e) => {
    if (password !== passwordConfirmation) {
      alert("passwords do not match");
      return;
    }
    handleRegister({ email, name, password, passwordConfirmation }, history)
  };

return (
  <div>
    <h1>Register</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Input
        value={email}
        onChange={(e, {value}) => {
          setEmail(value);
        }}
        label={"Email"}
      />
      
      <Form.Input
        value={name}
        onChange={(e, {value}) => {
          setName(value);
        }}
        label={"Name"}
      />
      
      <Form.Input
        value={password}
        onChange={(e, {value}) => {
          setPassword(value);
        }}
        label={"Password"}
      />
      
      <Form.Input
        value={passwordConfirmation}
        onChange={(e, {value}) => {
          setPasswordConfirmation(value);
        }}
        label={"Password Confirmation"}
      />
      <Button>Register</Button>
    </Form>
  </div>
)
}

export default Register;