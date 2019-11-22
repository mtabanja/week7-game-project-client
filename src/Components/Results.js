import React from "react";

export default function Results(props) {
  const userPoints = props.currentRoom.users.map(user => user.points);

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
      Winner is: {props.winner()}
    </div>
  );
}
