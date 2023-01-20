import Card from './Card';
import s from './Card.module.css'

export default function Cards(props) {
   
   return (
   <div className={s.tarjetas}>
      {
         props.characters.map((character) => {
            return (
               <Card
                  key={character.id}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={() => props.onClose(character.id)}
               />
            )
         })
      }
   </div>
   );
}
