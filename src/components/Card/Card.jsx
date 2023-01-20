import s from './Card.module.css'

export default function Card(props) {
   return (
      <div className={s.fondo}>
         <button onClick={props.onClose} className={s.cerrar}>X</button>
         <h2>{props.name}</h2>
         <img  src={props.image} alt={props.name} />
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
      </div>
   );
}
