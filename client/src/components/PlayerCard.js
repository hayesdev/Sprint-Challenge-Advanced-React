import React from "react";

export const PlayerCard = props => {
  return (
    <div key={props.id}>
      <h2>Name: {props.name}</h2>
      <h2>Country: {props.country}</h2>
      <h2>Searches: {props.searches}</h2>
    </div>
  );
};
