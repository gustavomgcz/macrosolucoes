import "./AboutUs.css"
import ImgTime from "../../assets/img/macro-presentation.jpeg"
import PageTitle from "components/PageTitle"
import PhilosophyCard from "components/PhilosophyCard"
import { TbTargetArrow, TbEyeglass, TbUserShield } from "react-icons/tb";
import Feedback from "components/Feedback";

function AboutUs() {
    return (
        <>
            <PageTitle title="Quem Somos" />
            <main>
                <div className="container about-us">
                    <div className="presentation-container">
                        <div className="presentation-text-area">
                            <p className="presentation-text">
                                Somos uma empresa de consultoria especializada em projetos de Segurança da Informação, Privacidade e Proteção de Dados, Governança de TI, Gestão de Riscos e Desenvolvimento, contamos com profissionais com mais de 20 anos de experiência em projetos em empresas públicas e privadas.
                            </p>
                            <p className="presentation-text">
                                Temos como objetivo principal entender, entregar e garantir as melhores soluções de segurança de tecnologia da informação, elevando o nível de maturidade e contribuindo com a continuidade e produtividade dos negócios de seus clientes.
                            </p>
                        </div>
                        <div className="presentation-image-area">
                            <img className="presentation-image" src={ImgTime} alt="Foto da Equipe" />
                        </div>
                        <div className="presentation-philosophy">
                            <div className="presentation-cards">
                                <PhilosophyCard icon={<TbTargetArrow />} title="Missão">
                                    <p>
                                        Nissão da empresa (ser um parceiro especializado que auxiliará na implantação e melhoria de projetos de Segurança da Informação)
                                    </p>
                                </PhilosophyCard>
                                <PhilosophyCard icon={<TbEyeglass />} title="Visão">
                                    <p>
                                        Visão da empresa (ser reconhecida como líder em consultoria de Segurança da Informação, proporcionando soluções inovadoras e personalizadas que garantam a proteção eficaz dos ativos digitais de nossos clientes)
                                    </p>
                                </PhilosophyCard>
                                <PhilosophyCard icon={<TbUserShield />} title="Valores">
                                    <p>
                                        Valores da empresa (segurança intransigente, inovação continua, integridade e ética, compromisso com a excelência, parceria e colaboração, foco no cliente)
                                    </p>
                                </PhilosophyCard>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="subtitle">Feedback de Parceiros</h2>
                        <div className="feedback-grid">
                            <Feedback partner="Parceiro 1">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Rhoncus mattis rhoncus urna neque viverra justo. Dignissim enim sit amet venenatis urna. Imperdiet nulla malesuada pellentesque elit. Cras semper auctor neque vitae tempus quam pellentesque nec.
                                </p>
                            </Feedback>
                            <Feedback partner="Parceiro 2">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Rhoncus mattis rhoncus urna neque viverra justo. Dignissim enim sit amet venenatis urna. Imperdiet nulla malesuada pellentesque elit. Cras semper auctor neque vitae tempus quam pellentesque nec.
                                </p>
                            </Feedback>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutUs