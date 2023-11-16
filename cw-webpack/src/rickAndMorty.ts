import axios, { AxiosResponse } from "../node_modules/axios/index";

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string
  };
  location: {
    name: string;
    url: string
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
// const axios = require('axios');

export const getCharacters = async () => {
  let pages: number = 2;
  const result: ICharacter[] = [];
  for(let page = 2; page <= pages; page+=2) {
    let pageResult: AxiosResponse = await axios.get('https://rickandmortyapi.com/api/character', {
      params: {
        page
      }
    })
    pages = pageResult.data.info.pages;
    result.push(pageResult.data.results.map(({name}: ICharacter) => `Name: ${name}`));
  }
  return result.flat()
}

// (async function() {
//   const characters = await getCharacters();
//   console.log(characters)
// })()


export const getCharactersPromises = async () => {
  let promises = [];
  let pages: number = await axios.get('https://rickandmortyapi.com/api/character').then(response => response.data.info.pages)
  if(pages < 4) return;
  for(let page: number = 2; page <= pages; page+=2) {
    promises.push(await axios.get('https://rickandmortyapi.com/api/character', {
      params: {
        page
      }
    }))
  }

  const resultPromises = await Promise.allSettled(promises);
  // console.log(resultPromises)

  return resultPromises.filter(promise => promise.status === 'fulfilled').reduce((prev, next: any) => prev.concat(next.value.data.results) , [])
}

// console.log(getCharactersPromises())

// (async function() {
//   const characters = await getCharactersPromises();
//   console.log(characters)
// })()