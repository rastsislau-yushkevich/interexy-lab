import React from "react";
import { CharacterType } from "../types/CharacterTypes";

const Character = ({ name, image, type }: Partial<CharacterType>) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={`Image of: ${name}`} />
      <h3 className="card-name">{name}</h3>
      <p className="card-info">{type}</p>
    </div>
  )
}

export default Character