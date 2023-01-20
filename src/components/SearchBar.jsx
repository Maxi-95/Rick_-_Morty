import { useState } from 'react';
import s from './Nav.module.css'

export default function SearchBar(props) {
   const [character, setCharacter] = useState('')

   const handleOnChange = (event) => {
      setCharacter(event.target.value)
   }
   
   return (
      <div>
         <input type='search' className={s.buscador} onChange={handleOnChange} value={character}/>
         <button onClick={()=>{props.onSearch(character)}} className={s.boton_buscador}>Agregar</button>
      </div>
   );
}
