import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import CreateLobby from "./CreateLobby";
import GameLobby from "./GameLobby";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={CreateLobby} />
          <Route path="/:lobbyName" children={<GameLobby />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
