import Button from 'components/Button'
import './SolutionsSection.css'
import { Link } from 'react-router-dom'

function SolutionsSection() {
    return (
        <section className='solutions container'>
            <h1 className='title'>
                Nossas Soluções
            </h1>
            <div className='solutions-grid'>
                <div className='solutions-card'>
                    <h2 className='subtitle'>Consultoria especializada</h2>
                    <p className='solutions-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.</p>
                    <Link to="/solucoes#consultoria-especializada">
                        <Button children="Saiba Mais" btnclass="underline" />
                    </Link>
                </div>
                <div className='solutions-card'>
                    <h2 className='subtitle'>Cursos e treinamentos</h2>
                    <p className='solutions-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.</p>
                    <Link to="/solucoes#cursos-e-treinamentos">
                        <Button children="Saiba Mais" btnclass="underline" />
                    </Link>
                </div>
                <div className='solutions-card'>
                    <h2 className='subtitle'>Riscos e compliance</h2>
                    <p className='solutions-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant.</p>
                    <Link to="/solucoes#riscos-e-compliance">
                        <Button children="Saiba Mais" btnclass="underline" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SolutionsSection