import PageTitle from 'components/PageTitle'
import Solution from 'components/Solution';
import { useEffect } from 'react'
import Report from '../../assets/img/report.jpg'
import Training from '../../assets/img/training.jpg'
import Risk from '../../assets/img/risk.jpg'

function Solutions() {
    useEffect(() => {
        const href = window.location.href.substring(window.location.href.lastIndexOf('#') + 1
        );
        const element = document.getElementById(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [])

    return (
        <>
            <PageTitle title="Soluções" />
            <main>
                <div className='container'>
                    <Solution
                        id='consultoria-especializada'
                        title='Consultoria especializada'
                        imgSrc={Report}
                        imgAlt='Imagem referente a consultoria especializada'
                    >
                        <p className='solutions-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Rhoncus mattis rhoncus urna neque viverra justo. Dignissim enim sit amet venenatis urna. Imperdiet nulla malesuada pellentesque elit. Cras semper auctor neque vitae tempus quam pellentesque nec. Dui faucibus in ornare quam viverra orci. Diam in arcu cursus euismod quis viverra nibh. Semper eget duis at tellus at urna condimentum. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Morbi non arcu risus quis varius quam. Mollis nunc sed id semper risus in. Dui id ornare arcu odio ut sem nulla.
                        </p>
                        <p className='solutions-text'>
                            Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Elementum sagittis vitae et leo duis. Elementum nibh tellus molestie nunc non. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Facilisis sed odio morbi quis. Pellentesque id nibh tortor id aliquet lectus. Adipiscing enim eu turpis egestas pretium aenean.
                        </p>
                    </Solution>
                    <Solution
                        id='cursos-e-treinamentos'
                        title='Cursos e treinamentos'
                        imgSrc={Training}
                        imgAlt='Imagem referente a cursos e treinamento'
                        invert='invert'
                    >
                        <p className='solutions-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Rhoncus mattis rhoncus urna neque viverra justo. Dignissim enim sit amet venenatis urna. Imperdiet nulla malesuada pellentesque elit. Cras semper auctor neque vitae tempus quam pellentesque nec. Dui faucibus in ornare quam viverra orci. Diam in arcu cursus euismod quis viverra nibh. Semper eget duis at tellus at urna condimentum. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Morbi non arcu risus quis varius quam. Mollis nunc sed id semper risus in. Dui id ornare arcu odio ut sem nulla.
                        </p>
                        <p className='solutions-text'>
                            Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Elementum sagittis vitae et leo duis. Elementum nibh tellus molestie nunc non. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Facilisis sed odio morbi quis. Pellentesque id nibh tortor id aliquet lectus. Adipiscing enim eu turpis egestas pretium aenean.
                        </p>
                    </Solution>
                    <Solution
                        id='riscos-e-compliance'
                        title='Riscos e compliance'
                        imgSrc={Risk}
                        imgAlt='Imagem referente a riscos e compliance'
                    >
                        <p className='solutions-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Rhoncus mattis rhoncus urna neque viverra justo. Dignissim enim sit amet venenatis urna. Imperdiet nulla malesuada pellentesque elit. Cras semper auctor neque vitae tempus quam pellentesque nec. Dui faucibus in ornare quam viverra orci. Diam in arcu cursus euismod quis viverra nibh. Semper eget duis at tellus at urna condimentum. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Morbi non arcu risus quis varius quam. Mollis nunc sed id semper risus in. Dui id ornare arcu odio ut sem nulla.
                        </p>
                        <p className='solutions-text'>
                            Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Elementum sagittis vitae et leo duis. Elementum nibh tellus molestie nunc non. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Facilisis sed odio morbi quis. Pellentesque id nibh tortor id aliquet lectus. Adipiscing enim eu turpis egestas pretium aenean.
                        </p>
                    </Solution>
                </div>
            </main>
        </>
    )
}

export default Solutions