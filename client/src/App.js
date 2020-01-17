import React from "react";

import { PlayerList } from "./components/PlayerList";
import { Nav } from "./components/Nav";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h1>Women's World Cup Player Interest</h1>
        <h3>By Google Search Interest</h3>
        <PlayerList />
      </div>
    );
  }
}

export default App;
