import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    id: 0,
    name: "",
    country: "",
    searches: ""
  };

  componetDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        const player = res.data;
        this.setState({
          id: player.id,
          name: player.name,
          country: player.country,
          searches: player.searches
        });
      })
      .catch(err => {
        console.log("Error loading API", err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Player Interest</h1>
        <h3>By Google Search Interest</h3>
      </div>
    );
  }
}

export default App;
