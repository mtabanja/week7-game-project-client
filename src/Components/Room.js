import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { Url } from "../constants";
import QuizContainer from "./QuizContainer";

class Room extends Component {
  onClick = async () => {
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
          <p key={user.email}>
            {user.email}
            {user.points}
          </p>
        ))
      ) : (
        <p>"This Room Has No User"</p>
      );

    // const fullRoomTrue =
    //   users.length === 2 ? (
    //     <QuizContainer currentRoom={room} />
    //   ) : (
    //     <p>Wait for the other player to begin the quiz!</p>
    //   );

    return (
      <div>
        <h1>{name}</h1>
        <button onClick={this.onClick}>Join</button>
        {list}
        <QuizContainer currentRoom={room} />
        {/* {fullRoomTrue} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  rooms: state.rooms
});

export default connect(mapStateToProps)(Room);
