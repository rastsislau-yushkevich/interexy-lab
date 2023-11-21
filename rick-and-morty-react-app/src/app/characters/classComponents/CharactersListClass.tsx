import React from "react";
import { CharacterClass } from "./CharacterClass";
import { CharacterType } from "../types/CharacterTypes";
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';
import { CharacterClassPage } from "../CharacterClass.page";

export class CharactersListClass extends React.Component<{}, { characters: CharacterType[], page: number }> {
  constructor(props: {}) {
    super(props);
    this.state = { characters: [], page: 1 };
  }

  setNextPage = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }))
  }

  setPrevPage = () => {
    this.setState((prevState) => ({ page: prevState.page - 1 }))
  }

  fetchCharacters = async () => {
    let response: AxiosResponse = await axios.get('https://rickandmortyapi.com/api/character', {
      params: {
        page: this.state.page
      }
    })
    let data: CharacterType[] = await response.data.results;
    this.setState({ characters: data })
  }

  componentDidMount(): void {
    this.fetchCharacters()
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ characters: CharacterType[]; page: number; }>, snapshot?: any): void {
    if (prevState.page !== this.state.page) {
      this.fetchCharacters()
    }
  }

  render() {
    return (
      <>
        <h1>Characters List Class</h1>
        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {this.state.characters.length > 0 && this.state.characters.map(({ id, name, type, image }) => <Link key={id} to={`/characters/${id}`}><CharacterClass type={type} image={image} name={name} /></Link>)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={this.setPrevPage}>{'<-'}</button>
          <p>{this.state.page}</p>
          <button onClick={this.setNextPage}>{'->'}</button>
        </div>
      </>
    )
  }
}