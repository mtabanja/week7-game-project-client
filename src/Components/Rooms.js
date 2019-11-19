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
      console.log("event test:", event);
      const { data } = event;
      console.log("data test:", data);
      const parsed = JSON.parse(data);

      this.props.dispatch(parsed);
    };
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ value });
    console.log("value", value);
  };
  onSubmit = async event => {
    // this.state = this.props.loadRooms();
    event.preventDefault();
    const name = this.state.value;
    console.log("name", name);

    const url = await "http://localhost:4000/room";
    superagent
      .post(url)
      .send({ name: name })
      .then(res => console.log("res", res));
  };

  reset = () => {
    this.setState({ value: "" });
  };
  render() {
    const rooms = this.props.rooms;
    console.log("this.props.rooms test:", rooms);
    const list = this.props.rooms ? (
      this.props.rooms.map((room, index) => (
        <p key={index}>
          <Link to={`/room/${room.name}`}>{room.name}</Link>
        </p>
      ))
    ) : (
      <p>"Loading...."</p>
    );
    return (
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
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms
});

export default connect(mapStateToProps)(Rooms);
