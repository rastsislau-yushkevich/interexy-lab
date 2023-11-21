import React from "react";
import { CharacterType } from "./types/CharacterTypes";
import axios, { AxiosResponse } from 'axios';


export class CharacterClassPage extends React.Component <{}, Partial<CharacterType>> {
  constructor(props: {}) {
    super(props);

    this.state = { id: 1, name: '', image: '', species: '' }
  }

  fetchCharacter = async (): Promise<void> => {
    let characterId: string = window.location.href.split('/')[4];
    let response: AxiosResponse = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
    let data: CharacterType = response.data;
    this.setState(data);
  }

  componentDidMount(): void {
    this.fetchCharacter()
  }

  render(): React.ReactNode {
    return(
      <div style={{display: 'flex', gap: '30px'}}>
        <div>
          <img src={this.state.image}/>
        </div>
        <div>
          <h1>{this.state.name}</h1>
          <h3>{this.state.species}</h3>
        </div>
      </div>
    )
  }
}