import React from "react";

export default function Results(props) {
  console.log(
    "props",
    props.currentRoom.map(room => room.users.map(user => user.points))
  );
  return (
    <div className="results">
      testing results
      {props.currentRoom.users.map(user => {
        return (
          <div key={user.id}>
            <p>{user.email}</p>
          </div>
        );
      })}
      Winner is:
      {props.currentRoom.map(room => room.users.map(user => user.points))
        ? props.winner()
        : "You Need To Play To See The Winner"}
    </div>
  );
}
