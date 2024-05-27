import './Feedback.css'

function Feedback({partner, children}) {
    return (
        <div className='feedback'>
            {children}
            <p className='partner'>- {partner}</p>
        </div>
    )
}

export default Feedback