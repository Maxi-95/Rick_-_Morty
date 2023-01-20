import './App.css'
import Cards from './components/Card/Cards.jsx'
import Nav from './components/Nav.jsx'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function App () {
  const [characters, setCharacters] = useState([
    // {
    // name: 'Morty Smith',
    // species: 'Human',
    // gender: 'Male',
    // image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    // }
])

const onClose = (id) => {
  setCharacters(
    characters.filter(character => character.id !== id)
  )      
}


  const onSearch = (character) => {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default App
