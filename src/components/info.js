const Info=({name, fil, stat})=>{
    return(
        <div className='d-inline justify-content-between p-3 mt-3'>
            <p className='mb-3'>{name}</p>
            <p className='mb-3'>{fil}</p>
            <p>{stat}</p>
        </div>
    )
}
export default Info;