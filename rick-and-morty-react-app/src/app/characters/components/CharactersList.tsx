import React, { useEffect, useState } from "react";
import Character from "./Character";
import { useGetCharactersQuery } from "../../providers/rickAndMortyApi";
import { CharacterType } from "../types/CharacterTypes";

const CharactersList = () => {
  const [page, setPage] = useState(1);
  let { data, isLoading } = useGetCharactersQuery({ page });
  let characters: CharacterType[] = data?.results;

  return (
    <>
      <div style={{ display: "flex", gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isLoading ? <h1>Loading... Please wait</h1> : characters?.map(({ id, name, image, type }) => <Character key={id} name={name} image={image} type={type} />)}
      </div>
      <div style={{ display: "flex", justifyContent: 'center'}}>
        <button onClick={() => setPage(page - 1)}>{'<-'}</button>
        <p>{page}</p>
        <button onClick={() => setPage(page + 1)}>{'->'}</button>
      </div>
    </>
  )
}

export default CharactersList