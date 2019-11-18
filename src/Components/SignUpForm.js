import React from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default function SignUpForm(props) {
  return (
    <div className="Login">
      <form onSubmit={props.onSubmit}>
        <FormGroup controlId="email" bssize="large">
          <label>Email</label>
          <FormControl
            autoFocus
            type="text"
            name="email"
            value={props.state}
            onChange={props.onChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <label>Password</label>
          <FormControl
            value={props.state}
            onChange={props.onChange}
            name="password"
            type="text"
          />
        </FormGroup>
        <Button block bssize="large" type="submit">
          SignUp
        </Button>
      </form>
    </div>
  );
}
