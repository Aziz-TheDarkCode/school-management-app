
const Row =({numb,name,date,fil,year,classe,icon})=>{
    return(
        <div className='d-flex justify-content-between p-1 mt-3 w-100 text-left'>
            <p>{numb}</p>
            <p>{name}</p>
            <p>{date}</p>
            <p>{fil}</p>
            <p className="mr-5">{year}</p>
          
        </div>
    )
}
export default Row