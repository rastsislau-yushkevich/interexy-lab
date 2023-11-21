import React from "react";
import { CharacterType } from "../types/CharacterTypes";

export class CharacterClass extends React.Component<Partial<CharacterType>>{
  constructor(props: CharacterType) {
    super(props);
  };

  render() {
    return (
      <div className="card">
        <img className="card-image" src={this.props.image} alt={`Image of: ${this.props.name}`} />
        <h3 className="card-name">{this.props.name}</h3>
        <p className="card-info">{this.props.type}</p>
      </div>
    )
  };
}