import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/">
            <img
              src="/docs/4.3/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              class="d-inline-block align-top"
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
