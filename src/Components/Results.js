import React from "react";

export default function Results(props) {
  console.log(props.winner());

  const { users } = props.currentRoom;

  const every = users.every(user => user.ready);

  if (!every) {
    return <p>Wait for the other player to finish the quiz!</p>;
  }

  return (
    <div className="results">
      <h3>Results</h3>
      {users.map(user => {
        return (
          <div key={user.id}>
            <p>{user.email}</p>
          </div>
        );
      })}
      <p>Winner is:{props.winner()}</p>
    </div>
  );
}
