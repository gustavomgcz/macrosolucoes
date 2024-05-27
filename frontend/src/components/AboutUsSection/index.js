import './AboutUsSection.css'
import Meeting from '../../assets/img/meeting.jpg'

function AboutUsSection() {
    return (
        <section className='about-us-home container'>
            <h1 className='title'>Quem Somos</h1>
            <div className='about-us-home-grid'>
                <div>
                    <p className='about-us-home-text'>
                        Somos uma empresa de consultoria especializada em projetos de Segurança da Informação, Privacidade e Proteção de Dados, Governança de TI, Gestão de Riscos e Desenvolvimento.
                    </p>
                    <p className='about-us-home-text'>
                        Temos como objetivo principal garantir a segurança de tecnologia da informação, elevar o nível de maturidade em segurança e contribuir com a continuidade e produtividade dos negócios de seus clientes.
                    </p>
                    <p className='about-us-home-text'>
                        Com profissionais com mais de 20 anos de experiência em projetos em empresas públicas e privadas, entendemos e entregamos as melhores soluções em Segurança da Informação.
                    </p>
                </div>
                <div className='about-us-home-image-container'>
                    <img className='about-us-home-image' src={Meeting} alt='Homem fazendo reunião online com quatro outras pessoas.' />
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection