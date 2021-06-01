const MiniCard = ({title,number})=> 
{
    return(
        <div className='mini-card mt-6 w-25 mr-4' style={{backgroundColor:`red`}}>
            <h1 className='mb-4 text-bold'>{title}</h1>
            <p className='text-bold '><span className='text-larger mt-1 mr-1'>{number}</span>étudiants</p>
        </div>
        
    )    
}
export default MiniCard;