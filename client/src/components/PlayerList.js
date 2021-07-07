import React from "react";
import axios from "axios";
import { PlayerCard } from "./PlayerCard";

export class PlayerList extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        const player = res.data;
        this.setState({
          players: player
        });
      })
      .catch(err => {
        console.log("Error loading API", err);
      });
  }

  render() {
    return (
      <div className="player-list">
        {this.state.players.map(p => (
          <PlayerCard
            key={p.id}
            name={p.name}
            country={p.country}
            searches={p.searches}
          />
        ))}
      </div>
    );
  }
}
