import Button from 'components/Button'
import './NewsCard.css'
import { Link } from 'react-router-dom'

function NewsCard() {
    return (
        // TODO: ajustar link recebendo via props de URL /noticias/link-noticia
        // TODO: src da imagem recebendo via props
        // TODO: ajustar titulo da noticia recebendo via props
        <Link to={"/noticias"}>
            <div className='news-card'>
                <img src='https://github.com/gustavomgcz.png' alt='Teste' />
                <h2 className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <Button children="Ler" />
            </div>
        </Link>
    )
}

export default NewsCard