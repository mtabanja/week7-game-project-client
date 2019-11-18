import React from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default function LoginForm(props) {
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
          Login
        </Button>
      </form>
    </div>
  );
  //   return (
  //     <div>
  //       <form onSubmit={props.onSubmit}>
  //         <label>
  //           Email:
  //           <input
  //             type="text"
  //             name="email"
  //             value={props.state}
  //             onChange={props.onChange}
  //           />
  //           Password:
  //           <input
  //             type="text"
  //             name="password"
  //             value={props.state}
  //             onChange={props.onChange}
  //           />
  //         </label>
  //         <input type="submit" value="Submit" />
  //       </form>
  //     </div>
  //   );
}
