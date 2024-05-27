import NewsCard from 'components/NewsCard'
import './News.css'

function News() {
    return (
        <section className='news container'>
            <h1 className='title'>
                Notícias
            </h1>
            <ul className='news-recent'>
                <li>
                    <NewsCard />
                </li>
                <li>
                    <NewsCard />
                </li>
                <li>
                    <NewsCard />
                </li>
            </ul>
        </section>
    )
}

export default News