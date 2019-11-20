import Rooms from "./Components/Rooms";
import { connect } from "react-redux";
import Room from "./Components/Room";

class App extends React.Component {
  stream = new EventSource("http://localhost:4000/stream");
  componentDidMount = () => {
    this.stream.onmessage = event => {
      const { data } = event;
      const parsed = JSON.parse(data);
      this.props.dispatch(parsed);
    };
  };
  render() {
    return (
      <div>
        <Route path="/signin" component={LoginFormContainer} exact />
        <Route path="/" component={HomePage} exact />
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/room/:name" component={Room} />
      </div>
    );
  }
}
export default connect()(App);
