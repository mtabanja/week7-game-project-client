import React from "react";
import { connect } from "react-redux";
import superagent from "superagent";

class Room extends React.Component {
  onClick = async () => {
    const { name } = this.props.match.params;
    const url = `http://localhost:4000/join/${name}`;
    const response = await superagent
      .put(url)
      .set("Authorization", `Bearer ${this.props.user}`);
    console.log("response test", response);
  };

  render() {
    const { name } = this.props.match.params;
    console.log("name test:", name);

    return (
      <div>
        <h1>{name}</h1>

        <button onClick={this.onClick}>Join</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Room);
