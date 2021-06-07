
const B_card = (props) =>{
    return(
        
            <div className='p-4 w-25 mr-6'>
                <h1>{props.title1}</h1>
                <h2>{props.title}</h2>
                <tr>{props.num}{props.nom}{props.date}{props.fil}{props.annee}</tr>
            </div>
        
    )
}

export default B_card;