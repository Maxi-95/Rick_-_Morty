import SearchBar from './SearchBar.jsx'
import s from './Nav.module.css'

const Nav = (props) => {
    return(
        <nav className={s.navegador}>
            <SearchBar onSearch={props.onSearch}/>
        </nav>
    )
}

export default Nav;