const Tab=({name, fil, stat})=>{
    return(
        <div className='d-inline justify-content-between p-3 mt-3'>
            <p className='mb-3'>Nom :{name}</p>
            <p className='mb-3'>Filiere :{fil}</p>
            <p>Statut d'inscription :{stat}</p>
        </div>
    )
}
export default Tab;