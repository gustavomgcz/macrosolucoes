import './Solution.css'

function Solution({id, title, children, imgSrc, imgAlt, invert }) {
    return (
        <section id={id}>
            <h1 className='solutions-title'>{title}</h1>
            <div className={`solutions-presentation ${invert ? invert : ""}`}>
                <div className='solutions-text-container'>
                    {children}
                </div>
                <div className='solutions-image-container'>
                    <img className='solutions-image' src={imgSrc} alt={imgAlt} />
                </div>
            </div>
        </section>
    )
}

export default Solution