import React from "react";
import { Spinner, Badge } from "react-bootstrap";

export default function Results(props) {
  console.log(props.winner());

  const { users } = props.currentRoom;

  const every = users.every(user => user.ready);

  if (!every) {
    return (
      <div style={{ display: "table", margin: "auto", marginTop: "5%" }}>
        <Spinner
          style={{ display: "table", margin: "auto" }}
          animation="border"
          variant="warning"
        />
        <p>Wait for the other player to finish the quiz!</p>
      </div>
    );
  }

  return (
    <div className="results">
      <h1>Results</h1>
      {users.map(user => {
        return (
          <div id="result" key={user.id}>
            <p>
              {user.email} scored {user.points} points.
            </p>
          </div>
        );
      })}
      <h2>
        Winner is:<Badge variant="success">{props.winner()}</Badge>
      </h2>
    </div>
  );
}
