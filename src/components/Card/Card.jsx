import './Card.css'
function Card (props){
    const {
        imgUrl,
        title,
        price
    } = props
    return(
        <div className="card">
            <div className="card-title">
                {title}
            </div>
            <div className='card-body'>
                <img className='imgSmith' src={imgUrl} alt="will" />
            </div>
            <div className='card-footer'>
                price:{price}
            </div>
        </div>
    )
}
export default Card