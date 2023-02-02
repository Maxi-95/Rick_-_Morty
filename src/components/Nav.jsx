import SearchBar from './SearchBar.jsx'
import s from './Nav.module.css'
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
        <nav className={s.navegador}>
            <Link to={'/about'}>About</Link>
            <Link to={'/home'}>Homme</Link>
            <SearchBar onSearch={props.onSearch}/>
        </nav>
    )
}

export default Nav;