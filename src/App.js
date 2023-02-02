import './App.css'
import Cards from './components/Card/Cards.jsx'
import Nav from './components/Nav.jsx'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App () {
  const [characters, setCharacters] = useState([])

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
    <div>
      <Nav onSearch={onSearch}/>
      <Routes>
            <Route path='home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='about' element={<About/>}/>        
            <Route path='detail/:detailId' element={<Detail/>}/>          
      </Routes>      
    </div>
  )
}

export default App



