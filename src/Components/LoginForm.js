import React from "react";

export default function LoginForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={props.state}
            onChange={props.onChange}
          />
          Password:
          <input
            type="text"
            name="password"
            value={props.state}
            onChange={props.onChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
