const axios = require('axios');

const getCharacters = async () => {
  let pages = 2;
  const result = [];
  for(let page = 2; page <= pages; page+=2) {
    let pageResult = await axios.get('https://rickandmortyapi.com/api/character', {
      params: {
        page
      }
    })
    pages = pageResult.data.info.pages;
    result.push(pageResult.data.results.map(({name}) => `Name: ${name}`));
  }
  return result.flat()
}

// (async function() {
//   const characters = await getCharacters();
//   console.log(characters)
// })()


const getCharactersPromises = async () => {
  let promises = [];
  let pages = await axios.get('https://rickandmortyapi.com/api/character').then(response => response.data.info.pages)
  if(pages < 4) return;
  for(let page = 2; page <= pages; page+=2) {
    promises.push(await axios.get('https://rickandmortyapi.com/api/character', {
      params: {
        page
      }
    }))
  }

  const resultPromises = await Promise.allSettled(promises);
  // console.log(resultPromises)

  return resultPromises.filter(promise => promise.status === 'fulfilled').reduce((prev, next) => prev.concat(next.value.data.results), [])
}

// console.log(getCharactersPromises())

(async function() {
  const characters = await getCharactersPromises();
  console.log(characters)
})()