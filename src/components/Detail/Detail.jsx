import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./Detail.module.css"

const Detail = () => {
   const [character, setCharacter] = useState({});
   const { detailId } = useParams();

   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         .catch((err) => {
            window.alert('No hay personajes con ese ID');
         });
      return setCharacter({});
   }, [detailId]);

    return (
      //  <div>
      //   <button>
      //    <Link to={"/home"}>Home</Link>
      //   </button>
      //   <h1 style={{color: 'white'}}>Detalle del Personaje</h1>
      //   <h3>Name:{character?.name}</h3>
      //   <h3>Status:{character?.status}</h3>
      //   <h3>Specie:{character?.specie}</h3>
      //   <h3>Genrer:{character?.gender}</h3>
      //   <h3>Origin:{character?.origin?.name}</h3>
      //   <img src={character?.image} alt="" />
      //  </div>
      <div className={s.fondo}>
      <div className={s.home}>
       <div className={s.volver}>
          <button className={s.boton}>
             <Link to={'/home'}>HOME</Link>
          </button>
         <img className={s.imagen} src={character?.image} alt={character?.name} />
       </div>
      </div>
      <div className={s.descripcion}>
        <div className={s.lista}>
          <lu>
             <h2 className={s.titulo}>Detalles del Pesonaje</h2>
             <li>NOMBRE:</li>
             <p>{character?.name}</p>
             <li>STATUS:</li>
             <p>{character?.status}</p>
             <li>SPECIE:</li>
             <p>{character?.specie}</p>
             <li>GENDER:</li>
             <p>{character?.gender}</p>
             <li>ORIGIN:</li>
             <p>{character?.origin?.name}</p>
          </lu>
        </div>
      </div>
     </div>
    )
 }

 export default Detail;