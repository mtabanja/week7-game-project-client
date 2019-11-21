import React from "react";

export default function Results(props) {
  return (
    <div className="results">
      testing results
      {props.currentRoom.users.map(user => (
        <div key={user.id}>
          <p>{user.email}</p>
          <p>{user.points}</p>
        </div>
      ))}
    </div>
  );
}
