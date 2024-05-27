import NavBar from '../NavBar'
import './Header.css'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header className='container'>
            <Link to="/">
                <img src={logo} alt='Logo Macro Soluções' className='logo' />
            </Link>
            <nav className='navigation'>
                <NavBar to="/" navlink="Home" />
                <NavBar to="/solucoes" navlink="Soluções" />
                <NavBar to="/quem-somos" navlink="Quem Somos" />
                {/* <NavBar to="/noticias" navlink="Notícias" /> */}
                {/* <NavBar to="/links-uteis" navlink="Links Úteis" /> */}
                <NavBar to="/contato" navlink="Contato" />
            </nav>
        </header>
    )
}

export default Header