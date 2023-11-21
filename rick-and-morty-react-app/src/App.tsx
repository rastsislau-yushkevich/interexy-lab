import React from 'react';
import { CharactersListClass } from './app/characters/classComponents/CharactersListClass';
import CharactersList from './app/characters/components/CharactersList';
import { CharacterClassPage } from './app/characters/CharacterClass.page';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/characters' element={<CharactersListClass />} />
      <Route path='/characters-funcs' element={<CharactersList />} />
      <Route path='/characters/:id' element={<CharacterClassPage />} />
    </Routes>
  );
}

export default App;
