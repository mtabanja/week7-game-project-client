import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { Url } from "../constants";
import QuizContainer from "./QuizContainer";

class Room extends Component {
  state = { joined: false };

  onClick = async () => {
    if (!this.state.joined) {
      this.setState({ joined: true });
    } else {
      this.setState({ joined: false });
    }

    const { name } = this.props.match.params;
    const url = `${Url}/join/${name}`;
    const response = await superagent.put(url).set({
      authorization: `Bearer ${this.props.user}`
    });
    console.log("IGNORE IT:", response);
  };
  render() {
    console.log("WHAT IS MATCH PARAMS: ", this.props.match.params);
    const { name } = this.props.match.params;
    const { rooms } = this.props;
    const room = rooms.find(room => room.name === name);
    if (!room) {
      return "This room does not exist";
    }
    const { users } = room;
    const list =
      users && users.length ? (
        users.map(user => (
          <p style={{ display: "table", margin: "auto" }} key={user.email}>
            Player: {user.email}
          </p>
        ))
      ) : (
        <p>"This Room Has No User"</p>
      );

    const fullRoomTrue =
      users.length === 2 ? (
        <QuizContainer currentRoom={room} />
      ) : (
        <p>Wait for the other player to begin the quiz!</p>
      );

    return (
      <div>
        <h1 style={{ display: "table", margin: "auto" }}>
          You are in the room {name}.
        </h1>
        {!this.state.joined ? (
          <button onClick={this.onClick}>Join the Game</button>
        ) : (
          <div>
            {list}
            {fullRoomTrue}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  rooms: state.rooms
});

export default connect(mapStateToProps)(Room);
