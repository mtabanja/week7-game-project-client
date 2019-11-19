import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { Link } from "react-router-dom";

class Rooms extends Component {
  stream = new EventSource("http://localhost:4000/stream");
  state = {
    rooms: [],
    value: ""
  };

  componentDidMount = () => {
    this.stream.onmessage = event => {
      const { data } = event;
      const parsed = JSON.parse(data);
      this.props.dispatch(parsed);
    };
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  onSubmit = async event => {
    // this.state = this.props.loadRooms();
    event.preventDefault();
    const name = this.state.value;

    const url = await "http://localhost:4000/room";
    superagent
      .post(url)
      .set("Authorization", `Bearer ${this.props.user}`)
      .send({ name: name })
      .then(res => res);
  };

  reset = () => {
    this.setState({ value: "" });
  };
  render() {
    const list = this.props.rooms ? (
      this.props.rooms.map((room, index) => (
        <p key={index}>
          <Link to={`/room/${room.name}`}>{room.name}</Link>
        </p>
      ))
    ) : (
      <p>"Loading...."</p>
    );
    const form = this.props.user ? (
      <div onSubmit={this.onSubmit}>
        <form>
          <input
            value={this.state.value}
            onChange={this.onChange}
            type="text"
          ></input>
          <button onClick={this.reset} type="button">
            Reset
          </button>
          <button>submit</button>
        </form>
        {list}
      </div>
    ) : (
      ""
    );

    return (
      <div>
        <Link to={"/form"}>{form}</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms,
  user: state.user
});

export default connect(mapStateToProps)(Rooms);
