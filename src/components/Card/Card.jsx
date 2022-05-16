import './Card.scss'
function Card (props){
    const {
        imgUrl,
        title,
        price
    } = props
    return(
        <div className="card">
            <div className='card-body'>
                <img className='pic' src={imgUrl} alt="" />
            </div>
            <div className="card-title">
                {title}
            </div>
            <div className='card-footer'>
                price:{price}
            </div>
        </div>
    )
}
export default Card