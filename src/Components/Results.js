import React from "react";

export default function Results(props) {
  console.log(props.winner());
  return (
    <div className="results">
      testing results
      {props.currentRoom.users.map(user => {
        return (
          <div key={user.id}>
            <p>{user.email}</p>
            <p>{user.points}</p>
          </div>
        );
      })}
      Winner is:{props.winner()}
    </div>
  );
}
