import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateLobby from "./CreateLobby";
import GameLobby from "./GameLobby";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CreateLobby} />
          <Route path="/:id" children={<GameLobby />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
