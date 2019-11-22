import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="buttons">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img
              src="/docs/4.3/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              color="black"
              alt=""
            />
            QUIZAM
          </a>
        </nav>
      </div>
    );
  }
}
