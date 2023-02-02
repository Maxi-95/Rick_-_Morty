import s from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={s.fondo}>
         <button onClick={props.onClose} className={s.cerrar}>X</button>
         <Link to={`/detail/${props.id}`} >
         <h2>{props.name}</h2>
         </Link>
         <img  src={props.image} alt={props.name} />
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
      </div>
   );
}
