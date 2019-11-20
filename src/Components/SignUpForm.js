import React from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default function SignUpForm(props) {
  return (
    <div
      className="Signup"
      style={{ width: "50%", margin: "auto", marginTop: 20 }}
    >
      <form onSubmit={props.onSubmit}>
        <FormGroup controlId="email" bssize="large">
          <label style={{ display: "table", margin: "auto" }}>Email</label>
          <FormControl
            autoFocus
            type="text"
            name="email"
            value={props.state}
            onChange={props.onChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <label style={{ display: "table", margin: "auto" }}>Password</label>
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
