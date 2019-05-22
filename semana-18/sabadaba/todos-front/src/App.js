import React, { Component } from "react";
import Router from "./Router";
import NavBar from "./components/common/Navbar";

class App extends Component {
  state = {
    user: {},
  };

  setUser = user => {
    this.setState({ user });
  };

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem("USER"));
    if (user) {
      this.setState({ user });
    }
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <NavBar {...user} />

        <div className="uk-section">
          <Router setUser={this.setUser} user={user} />
        </div>
      </div>
    );
  }
}

export default App;
