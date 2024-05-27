import './Philosophy.css'

function PhilosophyCard({icon, title, children}) {
    return (
        <div className='philosophy-card'>
            {icon}
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default PhilosophyCard