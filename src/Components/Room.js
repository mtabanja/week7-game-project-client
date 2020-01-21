import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { Url } from "../constants";
import QuizContainer from "./QuizContainer";
import { Spinner, Badge, Button } from "react-bootstrap";

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
            Player: <Badge variant="info">{user.email}</Badge>
          </p>
        ))
      ) : (
        <p>"This Room Has No User"</p>
      );

    const fullRoomTrue =
      users.length === 2 ? (
        <QuizContainer currentRoom={room} />
      ) : (
        <div>
          <Spinner
            style={{ display: "table", margin: "auto" }}
            animation="border"
            variant="warning"
          />
          <p style={{ display: "table", margin: "auto" }}>
            Wait for the other player to begin the quiz!
          </p>
        </div>
      );

    return (
      <div>
        <h1 style={{ display: "table", margin: "auto" }}>
          You are in the room <Badge variant="info">{name}</Badge>.
        </h1>
        {!this.state.joined ? (
          <Button
            style={{ display: "table", margin: "auto", marginTop: 20 }}
            variant="primary"
            onClick={this.onClick}
            className="buttons"
          >
            Join the Game
          </Button>
        ) : (
          <div>
            <div className="row" style={{ display: "table", margin: "auto" }}>
              <h5>{list}</h5>
            </div>
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
