import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { Link } from "react-router-dom";
import { Url } from "../constants";
import { FormGroup, FormControl, Row } from "react-bootstrap";

class Rooms extends Component {
  state = {
    rooms: [],
    value: ""
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  onSubmit = async event => {
    // this.state = this.props.loadRooms();
    event.preventDefault();
    const name = this.state.value;

    const url = `${Url}/room`;
    await superagent
      .post(url)
      .set("Authorization", `Bearer ${this.props.user}`)
      .send({ name: name });
    // .then(res => res.send);
  };

  reset = () => {
    this.setState({ value: "" });
  };
  render() {
    const list = this.props.rooms ? (
      this.props.rooms.map((room, index) => (
        <ul class="list-group">
          <Link style={{ textDecoration: "none" }} to={`/room/${room.name}`}>
            <li
              id="rooms-list"
              class="list-group-item d-flex justify-content-between "
            >
              {room.name}
              <span class="badge badge-in-rooms badge-primary">
                Players Joined:{room.users.length}
              </span>
            </li>
          </Link>
        </ul>
      ))
    ) : (
      <p>"Loading...."</p>
    );
    const form = this.props.user ? (
      <div>
        <FormGroup>
          <form onSubmit={this.onSubmit}>
            <FormControl
              value={this.state.value}
              onChange={this.onChange}
              type="text"
              placeholder="Room Name"
              style={{ textAlign: "center", marginTop: 20 }}
            />
            <Row>
              <button
                className="  btn-primary btn-block"
                onClick={this.reset}
                type="button"
              >
                Reset Field
              </button>

              <button className=" btn-primary btn-block">Add Room</button>
            </Row>
          </form>
        </FormGroup>
        {this.props.rooms.length < 1 ? (
          <p style={{ display: "table", margin: "auto" }}>NO ROOMS YET</p>
        ) : (
          <p style={{ display: "table", margin: "auto" }}>ROOMS AVAILABLE</p>
        )}

        {list}
      </div>
    ) : (
      ""
    );

    return <div>{form}</div>;
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms,
  user: state.user
});

export default connect(mapStateToProps)(Rooms);
