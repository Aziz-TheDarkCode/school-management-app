const Row =({numb,name,date,fil,year,classe})=>{
    return(
        <div className='d-flex justify-content-between p-1 mt-3'>
            <p>{numb}</p>
            <p>{name}</p>
            <p>{date}</p>
            <p>{fil}</p>
            <p>{year}</p>
        </div>
    )
}
export default Row