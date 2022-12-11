import { Component } from "react";
import getGitHubUser from "../../services/DataService";

class Info extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    getGitHubUser(this.props.user)
      .then((response) => {
        this.setState(response.data);
      })
      .catch((error) => {
        this.setState({ error: "request error" });
      });
  }

  render() {
    return (
      <div>
        <h3>GitHub User Info</h3>
        <ul>
          {Object.keys(this.state).map((i) => (
            <li key={i}>
              {i}: {this.state[i]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Info;
