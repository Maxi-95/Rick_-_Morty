import { Link } from "react-router-dom";
import s from './About.module.css'

const About = () => {
    return (
       <div className={s.fondo}>
        <div className={s.home}>
         <div className={s.volver}>
            <button className={s.boton}>
               <Link to={'/home'}>HOME</Link>
            </button>
         </div>
        </div>
        <div className={s.descripcion}>
          <div className={s.lista}>
            <lu>
               <h2 className={s.titulo}>Perfil del Estudiante</h2>
               <li>NOMBRE:</li>
               <p>Maximiliano Fonseca</p>
               <li>FECHA DE NACIMIENTO:</li>
               <p>19/07/1995</p>
               <li>DONDE VIVO:</li>
               <p>Cordoba, Argentina</p>
               <li>OCUPACION</li>
               <p>Estudiante de soyHenry</p>
            </lu>
          </div>
        </div>
       </div>
    );
}

export default About;