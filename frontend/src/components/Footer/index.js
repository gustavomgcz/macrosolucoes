import NavBar from 'components/NavBar';
import './Footer.css'
import { GrInstagram, GrLinkedin, GrYoutube } from "react-icons/gr";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer container'>
            <div className='footer-info'>
                <div>
                    <h2>Entre em contato</h2>
                    <p className='text-contact'>
                        <a href="mailto:marcelo.romano@macrosolucoes.com" className='email-link'>marcelo.romano@macrosolucoes.com</a>
                    </p>
                    <p className='text-contact'>
                        <a href="+5521981009865">+55 21 9.8100-9865</a>
                    </p>
                </div>
                <div>
                    <h2>Redes Sociais</h2>
                    <div className='footer-icons'>
                        <Link to="https://instagram.com" target='_blank' rel="noopener noreferrer">
                            <GrInstagram />
                        </Link>
                        <Link to="https://linkedin.com" target='_blank' rel="noopener noreferrer">
                            <GrLinkedin />
                        </Link>
                        <Link to="https://youtube.com" target='_blank' rel="noopener noreferrer">
                            <GrYoutube />
                        </Link>
                    </div>
                </div>
                <div>
                    <h2>Precisa de Ajuda?</h2>
                    <div className='footer-nav'>
                        <NavBar navfooter='footer-nav-links' to="/" navlink="Home" />
                        <NavBar navfooter='footer-nav-links' to="/solucoes" navlink="Soluções" />
                        <NavBar navfooter='footer-nav-links' to="/quem-somos" navlink="Quem Somos" />
                        {/* <NavBar navfooter='footer-nav-links' to="/noticias" navlink="Notícias" /> */}
                        {/* <NavBar navfooter='footer-nav-links' to="/links-uteis" navlink="Links Úteis" /> */}
                        <NavBar navfooter='footer-nav-links' to="/contato" navlink="Contato" />
                    </div>
                </div>
            </div>
            <p className='made-by'>
                Desenvolvido por <Link to="https://www.linkedin.com/in/gustavo-magalhaes-cezar-a120ba121/" target='_blank'>Gustavo</Link>
            </p>
        </footer>
    )
}

export default Footer